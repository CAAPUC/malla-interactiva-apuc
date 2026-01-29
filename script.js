const semestres = [
  {
    nombre: "Semestre 1",
    cursos: [
      { name: "Precálculo", code: "MAT1000", prereq: [] },
      { name: "Introducción a la Ciencia Política", code: "ICP101", prereq: [] }
    ]
  },
  {
    nombre: "Semestre 2",
    cursos: [
      { name: "Cálculo", code: "MAT1100", prereq: ["MAT1000"] },
      { name: "Introducción al Derecho", code: "ADP001D", prereq: [] }
    ]
  }
];

const contenedor = document.getElementById("semestres");
const svg = document.getElementById("lineas");

semestres.forEach(sem => {
  const col = document.createElement("div");
  col.className = "semestre";

  const title = document.createElement("div");
  title.className = "semestre-title";
  title.textContent = sem.nombre;
  col.appendChild(title);

  sem.cursos.forEach(c => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.id = c.code;
    div.textContent = c.name;

    // Grupos de color
    if (["MAT1000","MAT1100"].includes(c.code)) div.classList.add("ramo-matematica");
    else if (["ICP101"].includes(c.code)) div.classList.add("ramo-cienciapol");
    else div.classList.add("ramo-base");

    if (c.prereq.length) div.classList.add("locked");

    div.onclick = () => {
      if (div.classList.contains("locked")) return;
      div.classList.toggle("approved");
      actualizar();
    };

    col.appendChild(div);
  });

  contenedor.appendChild(col);
});
// ---------------- COLORES POR RAMO ----------------

// Filosofía + Optativos FG
const fg = ["FIL2001"];
if (c.code.startsWith("FG")) {
    div.classList.add("ramo-fg");
}
else if (fg.includes(c.code)) {
    div.classList.add("ramo-fg");
}

// Gestión / administración avanzada
else if ([
    "EAA1210", // Contabilidad
    "ADP201C",
    "ADP201D",
    "ADP201G",
    "ADP202G",
    "ADP202I",
    "ADP201E",
    "ADP203I",
    "ADP203G"
].includes(c.code)) {
    div.classList.add("ramo-gestion");
}

// Minor
else if (c.name.toLowerCase().includes("minor")) {
    div.classList.add("ramo-minor");
}

// Resto
else {
    div.classList.add("ramo-base");
}
function drawLines() {
  svg.innerHTML = "";

  semestres.forEach(sem =>
    sem.cursos.forEach(c => {
      c.prereq.forEach(req => {
        const a = document.getElementById(req);
        const b = document.getElementById(c.code);
        if (!a || !b) return;

        const r1 = a.getBoundingClientRect();
        const r2 = b.getBoundingClientRect();

        const x1 = r1.left + r1.width/2 + scrollX;
        const y1 = r1.bottom + scrollY;
        const x2 = r2.left + r2.width/2 + scrollX;
        const y2 = r2.top + scrollY;

        const path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttribute("d", `M ${x1},${y1} C ${x1},${(y1+y2)/2} ${x2},${(y1+y2)/2} ${x2},${y2}`);
        svg.appendChild(path);
      });
    })
  );
}

function marcarPrerrequisitos() {
  const set = new Set();
  semestres.forEach(s => s.cursos.forEach(c => c.prereq.forEach(p => set.add(p))));
  set.forEach(id => document.getElementById(id)?.classList.add("ramo-prereq"));
}

function actualizar() {
  semestres.forEach(s =>
    s.cursos.forEach(c => {
      if (c.prereq.every(p => document.getElementById(p)?.classList.contains("approved"))) {
        document.getElementById(c.code)?.classList.remove("locked");
      }
    })
  );
  drawLines();
}

setTimeout(() => {
  drawLines();
  marcarPrerrequisitos();
}, 200);

document.getElementById("dark-toggle").onchange = e =>
  document.body.classList.toggle("dark", e.target.checked);


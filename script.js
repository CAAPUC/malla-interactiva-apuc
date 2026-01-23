const ramos = [
  // PRIMER AÑO – SEMESTRE 1
  { id: "MAT1000", nombre: "Precálculo", semestre: 1, color: "d", prereq: [] },
  { id: "ICP101", nombre: "Intro. Ciencia Política", semestre: 1, color: "d", prereq: [] },
  { id: "ADP002G", nombre: "Gestión Pública I", semestre: 1, color: "d", prereq: [] },
  { id: "ADP001G", nombre: "Justicia y Bien Común", semestre: 1, color: "d", prereq: [] },
  { id: "FIL2001", nombre: "Filosofía ¿Para qué?", semestre: 1, color: "a", prereq: [] },

  // SEMESTRE 2
  { id: "MAT1100", nombre: "Cálculo I", semestre: 2, color: "d", prereq: ["MAT1000"] },
  { id: "EAE11A", nombre: "Intro. Microeconomía", semestre: 2, color: "d", prereq: [] },
  { id: "ADP001S", nombre: "Comportamiento Organizacional", semestre: 2, color: "d", prereq: [] },
  { id: "ADP001D", nombre: "Introducción al Derecho", semestre: 2, color: "d", prereq: [] },

  // SEGUNDO AÑO – SEMESTRE 3
  { id: "EYP1010", nombre: "Probabilidad y Estadística", semestre: 3, color: "d", prereq: ["MAT1100"] },
  { id: "ADP001E", nombre: "Fund. Macroeconomía", semestre: 3, color: "d", prereq: [] },
  { id: "ADP003G", nombre: "Gestión Pública II", semestre: 3, color: "d", prereq: [] },
  { id: "GOB1001", nombre: "Intro. Políticas Públicas", semestre: 3, color: "d", prereq: [] },

  // SEMESTRE 4
  { id: "ADP004G", nombre: "Métodos Aplicados", semestre: 4, color: "d", prereq: ["EYP1010"] },
  { id: "ADP002E", nombre: "Economía Sector Público", semestre: 4, color: "d", prereq: ["ADP001E"] },
  { id: "ICP103", nombre: "Política Comparada", semestre: 4, color: "d", prereq: [] },
  { id: "ADP002D", nombre: "Instituciones del Estado", semestre: 4, color: "d", prereq: [] },

  // TERCER AÑO – SEMESTRE 5
  { id: "EAA1210", nombre: "Contabilidad I", semestre: 5, color: "b", prereq: [] },
  { id: "ADP201C", nombre: "Política en Gestión Pública", semestre: 5, color: "b", prereq: ["ICP101"] },
  { id: "ADP201D", nombre: "Régimen Jurídico del Estado", semestre: 5, color: "b", prereq: ["ADP002D"] },

  // SEMESTRE 6
  { id: "OSP", nombre: "Operaciones Serv. Públicos", semestre: 6, color: "b", prereq: ["EYP1010"] },
  { id: "ADP201G", nombre: "Evaluación Programas", semestre: 6, color: "b", prereq: ["ADP004G"] },
  { id: "ADP202G", nombre: "Adm. Financiera del Estado", semestre: 6, color: "b", prereq: ["EAE11A","ADP001E"] },

  // CUARTO AÑO – SEMESTRE 7
  { id: "ADP202I", nombre: "Gestión Innovación y Tecnología", semestre: 7, color: "b", prereq: [] },
  { id: "ADP201E", nombre: "Gestión de Personas", semestre: 7, color: "b", prereq: ["ADP001S"] },

  // SEMESTRE 8
  { id: "ADP203I", nombre: "Transformación Digital", semestre: 8, color: "b", prereq: [] },
  { id: "ADP203G", nombre: "Capstone", semestre: 8, color: "b", prereq: ["OSP"] },

  // QUINTO AÑO – SEMESTRE 10
  { id: "ADP306G", nombre: "Práctica Profesional", semestre: 10, color: "d", prereq: ["ADP203G"] }
];

const estado = {};
const contenedor = document.getElementById("malla");

// Crear columnas por semestre
for (let s = 1; s <= 10; s++) {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h3>Semestre ${s}</h3>`;
  col.dataset.semestre = s;
  contenedor.appendChild(col);
}

// Render ramos
ramos.forEach(ramo => {
  estado[ramo.id] = false;

  const div = document.createElement("div");
  div.className = `ramo color-${ramo.color} bloqueado`;
  div.textContent = ramo.nombre;
  div.onclick = () => cursarRamo(ramo.id);

  ramo.element = div;

  document
    .querySelector(`[data-semestre="${ramo.semestre}"]`)
    .appendChild(div);
});

function cursarRamo(id) {
  if (!puedeCursar(id)) return;

  estado[id] = true;
  const ramo = ramos.find(r => r.id === id);
  ramo.element.classList.remove("bloqueado");
  ramo.element.classList.add("cursado");

  actualizarDesbloqueos();
}

function puedeCursar(id) {
  const ramo = ramos.find(r => r.id === id);
  return ramo.prereq.every(p => estado[p]);
}

function actualizarDesbloqueos() {
  ramos.forEach(ramo => {
    if (!estado[ramo.id] && puedeCursar(ramo.id)) {
      ramo.element.classList.remove("bloqueado");
    }
  });
}
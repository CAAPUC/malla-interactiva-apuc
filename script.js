// Colores definidos
const COLORS = {
    general: "#a6bec1",
    profesional: "#815db7",
    minor: "#df97b9",
    default: "#b57edc"
};

// [AQUÍ VA TU ARRAY CONST MALLA EXACTAMENTE IGUAL QUE ANTES]
// Copia y pega el array "const malla = [...]" del código anterior aquí.
// No lo repito para ahorrar espacio, pero usa el mismo data del PDF.
// --- INICIO DE DATOS (Mismos de antes) ---
const malla = [
    // AÑO 1
    { title: "Semestre 1", ramos: [
        { id: "MAT1000", name: "Precálculo", color: COLORS.default, req: [] },
        { id: "ICP101", name: "Intro. Ciencia Política", color: COLORS.default, req: [] },
        { id: "ADP002G", name: "Gestión Pública I", color: COLORS.default, req: [] },
        { id: "ADP001G", name: "Justicia y Bien Común", color: COLORS.default, req: [] },
        { id: "FIL2001", name: "Filosofía ¿Para qué?", color: COLORS.general, req: [] },
        { id: "VRA100C", name: "Ex. Com. Escrita", color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 2", ramos: [
        { id: "MAT1100", name: "Cálculo I", color: COLORS.default, req: ["MAT1000"] },
        { id: "EAE11A", name: "Intro. Microeconomía", color: COLORS.default, req: [] },
        { id: "ADP001S", name: "Comp. Organizacional", color: COLORS.default, req: [] },
        { id: "ADP001D", name: "Intro. al Derecho", color: COLORS.default, req: [] },
        { id: "OFG1", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 2
    { title: "Semestre 3", ramos: [
        { id: "EYP1010", name: "Probabilidad y Est.", color: COLORS.default, req: ["MAT1100"] },
        { id: "ADP001E", name: "Fund. Macroeconomía", color: COLORS.default, req: [] },
        { id: "ADP003G", name: "Gestión Pública II", color: COLORS.default, req: [] },
        { id: "GOB1001", name: "Intro. Políticas Públicas", color: COLORS.default, req: [] },
        { id: "OFG2", name: "OFG", color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 4", ramos: [
        { id: "ADP004G", name: "Métodos Aplicados", color: COLORS.default, req: ["EYP1010"] },
        { id: "ADP002E", name: "Econ. Sector Público", color: COLORS.default, req: ["ADP001E"] },
        { id: "ICP103", name: "Intro. Pol. Comparada", color: COLORS.default, req: [] },
        { id: "ADP002D", name: "Inst. y Garantías", color: COLORS.default, req: [] },
        { id: "OFG3", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 3
    { title: "Semestre 5", ramos: [
        { id: "ADP005G", name: "Evidencias Gestión P.", color: COLORS.default, req: [] },
        { id: "EAA1210", name: "Contabilidad I", color: COLORS.profesional, req: [] },
        { id: "ADP201C", name: "Pol. en Gestión y PP", color: COLORS.profesional, req: ["ICP101"] },
        { id: "ADP201D", name: "Régimen Jurídico", color: COLORS.profesional, req: ["ADP002D"] },
        { id: "OFG4", name: "OFG", color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 6", ramos: [
        { id: "ADP2011", name: "Operaciones Serv. Púb.", color: COLORS.profesional, req: ["EYP1010"] },
        { id: "ADP201G", name: "Eval. Programas Púb.", color: COLORS.profesional, req: ["ADP004G"] },
        { id: "ADP202G", name: "Admin. Financiera", color: COLORS.profesional, req: ["EAE11A", "ADP001E"] },
        { id: "MIN1", name: "Minor", color: COLORS.minor, req: [] },
        { id: "OFG5", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 4
    { title: "Semestre 7", ramos: [
        { id: "ADP2021", name: "Gestión Innovación", color: COLORS.profesional, req: [] },
        { id: "ADP201E", name: "Gestión Personas", color: COLORS.profesional, req: ["ADP001S"] },
        { id: "MIN2", name: "Minor", color: COLORS.minor, req: [] },
        { id: "MIN3", name: "Minor", color: COLORS.minor, req: [] },
        { id: "OFG6", name: "OFG", color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 8", ramos: [
        { id: "ADP2031", name: "Transformación Digital", color: COLORS.profesional, req: [] },
        { id: "ADP203G", name: "Capstone (Proyectos)", color: COLORS.profesional, req: ["ADP2011"] },
        { id: "MIN4", name: "Minor", color: COLORS.minor, req: [] },
        { id: "MIN5", name: "Minor", color: COLORS.minor, req: [] },
        { id: "OFG7", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 5
    { title: "Semestre 9", ramos: [
        { id: "ADP301G", name: "Ética y PP", color: COLORS.default, req: [] },
        { id: "ADP302G", name: "Probidad y Transp.", color: COLORS.default, req: [] },
        { id: "ADP301E", name: "Habilidades Directivas", color: COLORS.default, req: [] },
        { id: "ADP303G", name: "Auditoría Gubernamental", color: COLORS.default, req: [] },
        { id: "OPROF", name: "Opt. Profundización", color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 10", ramos: [
        { id: "ADP306G", name: "Práctica Profesional", color: COLORS.default, req: ["ADP203G"] },
        { id: "ADP305G", name: "Entorno y Relación", color: COLORS.default, req: [] },
        { id: "ADP304G", name: "Ética Profesional", color: COLORS.default, req: [] }
    ]}
];
// --- FIN DE DATOS ---

let aprobados = new Set();

function toRoman(num) {
    const roman = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };
    return roman[num] || num;
}

function initMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    // Agrupar por Años (2 semestres por año)
    for (let i = 0; i < malla.length; i += 2) {
        const yearIndex = (i / 2) + 1;
        
        // Crear columna del AÑO
        const anioCol = document.createElement('div');
        anioCol.className = 'anio-col';
        
        // Header AÑO (Ej: AÑO 1)
        const anioHeader = document.createElement('div');
        anioHeader.className = 'anio-header';
        anioHeader.innerText = `Año ${yearIndex}`;
        anioCol.appendChild(anioHeader);

        // Contenedor de Semestres (Flex row)
        const semestresWrapper = document.createElement('div');
        semestresWrapper.className = 'semestres-wrapper';

        // Procesar los 2 semestres de este año
        for (let j = i; j < i + 2 && j < malla.length; j++) {
            const semData = malla[j];
            
            const semCol = document.createElement('div');
            semCol.className = 'semestre-col';

            // Header Semestre (Ej: I, II)
            const semHeader = document.createElement('div');
            semHeader.className = 'semestre-header';
            semHeader.innerText = toRoman(j + 1); // Convierte 1 -> I
            semCol.appendChild(semHeader);

            // Lista de Ramos
            const ramosList = document.createElement('div');
            ramosList.className = 'ramos-list';

            semData.ramos.forEach(ramo => {
                const rEl = document.createElement('div');
                rEl.className = 'ramo';
                rEl.id = ramo.id;
                rEl.innerText = ramo.name;
                rEl.style.backgroundColor = ramo.color;
                rEl.onclick = () => toggleRamo(ramo.id);
                ramosList.appendChild(rEl);
            });

            semCol.appendChild(ramosList);
            semestresWrapper.appendChild(semCol);
        }

        anioCol.appendChild(semestresWrapper);
        container.appendChild(anioCol);
    }
    updateVisuals();
}

function toggleRamo(id) {
    if (document.getElementById(id).classList.contains('bloqueado')) return;

    if (aprobados.has(id)) {
        aprobados.delete(id);
        limpiarDependencias(id);
    } else {
        aprobados.add(id);
    }
    updateVisuals();
}

function limpiarDependencias(idPadre) {
    malla.forEach(sem => {
        sem.ramos.forEach(r => {
            if (r.req.includes(idPadre) && aprobados.has(r.id)) {
                aprobados.delete(r.id);
                limpiarDependencias(r.id);
            }
        });
    });
}

function updateVisuals() {
    let totalRamos = 0;
    let totalAprobados = 0;

    malla.forEach(sem => {
        sem.ramos.forEach(r => {
            totalRamos++;
            const el = document.getElementById(r.id);
            const reqCumplidos = r.req.every(reqId => aprobados.has(reqId));
            
            if (!reqCumplidos) {
                el.classList.add('bloqueado');
                el.classList.remove('aprobado');
            } else {
                el.classList.remove('bloqueado');
                if (aprobados.has(r.id)) {
                    el.classList.add('aprobado');
                    totalAprobados++;
                } else {
                    el.classList.remove('aprobado');
                }
            }
        });
    });

    // Actualizar barra de progreso
    const porcentaje = Math.round((totalAprobados / totalRamos) * 100);
    document.getElementById('porcentaje').innerText = `${porcentaje}%`;
    document.getElementById('barra').style.width = `${porcentaje}%`;
}

document.addEventListener('DOMContentLoaded', initMalla);

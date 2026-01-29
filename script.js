// Colores definidos en el PDF
const COLORS = {
    general: "#a6bec1",       // [cite: 74] Filosofía y OFG
    profesional: "#815db7",   // [cite: 86] Contabilidad, Gestión, etc.
    minor: "#df97b9",         // [cite: 89] Minors
    default: "#b57edc"        // [cite: 90] Resto de ramos
};

// Data completa basada en el PDF [cite: 2-70]
const malla = [
    // AÑO 1
    { title: "Semestre 1", ramos: [
        { id: "MAT1000", name: "Precálculo", color: COLORS.default, req: [] },
        { id: "ICP101", name: "Intro. Ciencia Política", color: COLORS.default, req: [] },
        { id: "ADP002G", name: "Gestión Pública I", color: COLORS.default, req: [] },
        { id: "ADP001G", name: "Justicia y Bien Común", color: COLORS.default, req: [] },
        { id: "FIL2001", name: "Filosofía ¿Para qué?", color: COLORS.general, req: [] }, // [cite: 72]
        { id: "VRA100C", name: "Ex. Com. Escrita", color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 2", ramos: [
        { id: "MAT1100", name: "Cálculo I", color: COLORS.default, req: ["MAT1000"] }, // Req: Precálculo
        { id: "EAE11A", name: "Intro. Microeconomía", color: COLORS.default, req: [] },
        { id: "ADP001S", name: "Comp. Organizacional", color: COLORS.default, req: [] },
        { id: "ADP001D", name: "Intro. al Derecho", color: COLORS.default, req: [] },
        { id: "OFG1", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 2
    { title: "Semestre 3", ramos: [
        { id: "EYP1010", name: "Probabilidad y Est.", color: COLORS.default, req: ["MAT1100"] }, // Req: Cálculo
        { id: "ADP001E", name: "Fund. Macroeconomía", color: COLORS.default, req: [] },
        { id: "ADP003G", name: "Gestión Pública II", color: COLORS.default, req: [] },
        { id: "GOB1001", name: "Intro. Políticas Públicas", color: COLORS.default, req: [] },
        { id: "OFG2", name: "OFG", color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 4", ramos: [
        { id: "ADP004G", name: "Métodos Aplicados", color: COLORS.default, req: ["EYP1010"] }, // Req: Proba
        { id: "ADP002E", name: "Econ. Sector Público", color: COLORS.default, req: ["ADP001E"] }, // Req: Macro
        { id: "ICP103", name: "Intro. Pol. Comparada", color: COLORS.default, req: [] },
        { id: "ADP002D", name: "Inst. y Garantías", color: COLORS.default, req: [] },
        { id: "OFG3", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 3
    { title: "Semestre 5", ramos: [
        { id: "ADP005G", name: "Evidencias Gestión P.", color: COLORS.default, req: [] },
        { id: "EAA1210", name: "Contabilidad I", color: COLORS.profesional, req: [] }, // [cite: 76]
        { id: "ADP201C", name: "Pol. en Gestión y PP", color: COLORS.profesional, req: ["ICP101"] }, // Req: Intro CP
        { id: "ADP201D", name: "Régimen Jurídico", color: COLORS.profesional, req: ["ADP002D"] }, // Req: Inst y Garantías
        { id: "OFG4", name: "OFG", color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 6", ramos: [
        { id: "ADP2011", name: "Operaciones Serv. Púb.", color: COLORS.profesional, req: ["EYP1010"] }, // Req: Proba (Tabla p5)
        { id: "ADP201G", name: "Eval. Programas Púb.", color: COLORS.profesional, req: ["ADP004G"] }, // Req: Métodos
        { id: "ADP202G", name: "Admin. Financiera", color: COLORS.profesional, req: ["EAE11A", "ADP001E"] }, // Req: Micro y Macro
        { id: "MIN1", name: "Minor", color: COLORS.minor, req: [] },
        { id: "OFG5", name: "OFG", color: COLORS.general, req: [] }
    ]},
    // AÑO 4
    { title: "Semestre 7", ramos: [
        { id: "ADP2021", name: "Gestión Innovación", color: COLORS.profesional, req: [] },
        { id: "ADP201E", name: "Gestión Personas", color: COLORS.profesional, req: ["ADP001S"] }, // Req: Comp Org
        { id: "MIN2", name: "Minor", color: COLORS.minor, req: [] },
        { id: "MIN3", name: "Minor", color: COLORS.minor, req: [] },
        { id: "OFG6", name: "OFG", color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 8", ramos: [
        { id: "ADP2031", name: "Transformación Digital", color: COLORS.profesional, req: [] },
        { id: "ADP203G", name: "Capstone (Proyectos)", color: COLORS.profesional, req: ["ADP2011"] }, // Req: Operaciones
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
        { id: "ADP306G", name: "Práctica Profesional", color: COLORS.default, req: ["ADP203G"] }, // Req: Capstone
        { id: "ADP305G", name: "Entorno y Relación", color: COLORS.default, req: [] },
        { id: "ADP304G", name: "Ética Profesional", color: COLORS.default, req: [] }
    ]}
];

// Estado de ramos aprobados (Set para evitar duplicados)
let aprobados = new Set();

function initMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    malla.forEach(semestre => {
        const col = document.createElement('div');
        col.className = 'semestre';
        
        const title = document.createElement('div');
        title.className = 'titulo-semestre';
        title.innerText = semestre.title;
        col.appendChild(title);

        semestre.ramos.forEach(ramo => {
            const el = document.createElement('div');
            el.className = 'ramo';
            el.id = ramo.id;
            el.innerText = ramo.name;
            el.style.backgroundColor = ramo.color;
            el.onclick = () => toggleRamo(ramo.id);
            col.appendChild(el);
        });

        container.appendChild(col);
    });
    updateVisuals();
}

function toggleRamo(id) {
    // Verificar si está bloqueado antes de permitir el click
    if (document.getElementById(id).classList.contains('bloqueado')) return;

    if (aprobados.has(id)) {
        aprobados.delete(id);
        // Al desmarcar, también debemos desmarcar recursivamente los que dependen de este
        limpiarDependencias(id);
    } else {
        aprobados.add(id);
    }
    updateVisuals();
}

function limpiarDependencias(idPadre) {
    // Busca todos los ramos que requieren al idPadre
    malla.forEach(sem => {
        sem.ramos.forEach(r => {
            if (r.req.includes(idPadre) && aprobados.has(r.id)) {
                aprobados.delete(r.id);
                limpiarDependencias(r.id); // Recursividad
            }
        });
    });
}

function updateVisuals() {
    malla.forEach(sem => {
        sem.ramos.forEach(r => {
            const el = document.getElementById(r.id);
            
            // 1. Verificar si tiene prerequisitos cumplidos
            const reqCumplidos = r.req.every(reqId => aprobados.has(reqId));
            
            if (!reqCumplidos) {
                el.classList.add('bloqueado');
                el.classList.remove('aprobado');
            } else {
                el.classList.remove('bloqueado');
                // 2. Verificar si está aprobado por el usuario
                if (aprobados.has(r.id)) {
                    el.classList.add('aprobado');
                } else {
                    el.classList.remove('aprobado');
                }
            }
        });
    });
}

// Iniciar
document.addEventListener('DOMContentLoaded', initMalla);



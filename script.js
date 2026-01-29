// Colores definidos en el PDF
const COLORS = {
    general: "#a6bec1",       // Filosofía y OFG
    profesional: "#815db7",   // Contabilidad, Gestión, etc.
    minor: "#df97b9",         // Minors
    default: "#b57edc"        // Resto de ramos
};

// DATA MAESTRA: Contiene toda la info (Créditos, Prerrequisitos, ID, Nombre)
const malla = [
    // --- AÑO 1 ---
    { title: "Semestre 1", ramos: [
        { id: "MAT1000", name: "Precálculo", creditos: 10, color: COLORS.default, req: [] },
        { id: "ICP101", name: "Intro. Ciencia Política", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP002G", name: "Gestión Pública I", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP001G", name: "Justicia y Bien Común", creditos: 10, color: COLORS.default, req: [] },
        { id: "FIL2001", name: "Filosofía ¿Para qué?", creditos: 10, color: COLORS.general, req: [] },
        { id: "VRA100C", name: "Ex. Com. Escrita", creditos: 0, color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 2", ramos: [
        { id: "MAT1100", name: "Cálculo I", creditos: 10, color: COLORS.default, req: ["MAT1000"] },
        { id: "EAE11A", name: "Intro. Microeconomía", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP001S", name: "Comp. Organizacional", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP001D", name: "Intro. al Derecho", creditos: 10, color: COLORS.default, req: [] },
        { id: "OFG1", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // --- AÑO 2 ---
    { title: "Semestre 3", ramos: [
        { id: "EYP1010", name: "Probabilidad y Est.", creditos: 10, color: COLORS.default, req: ["MAT1100"] },
        { id: "ADP001E", name: "Fund. Macroeconomía", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP003G", name: "Gestión Pública II", creditos: 10, color: COLORS.default, req: [] },
        { id: "GOB1001", name: "Intro. Políticas Públicas", creditos: 10, color: COLORS.default, req: [] },
        { id: "OFG2", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 4", ramos: [
        { id: "ADP004G", name: "Métodos Aplicados", creditos: 10, color: COLORS.default, req: ["EYP1010"] },
        { id: "ADP002E", name: "Econ. Sector Público", creditos: 10, color: COLORS.default, req: ["ADP001E"] },
        { id: "ICP103", name: "Intro. Pol. Comparada", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP002D", name: "Inst. y Garantías", creditos: 10, color: COLORS.default, req: [] },
        { id: "OFG3", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // --- AÑO 3 ---
    { title: "Semestre 5", ramos: [
        { id: "ADP005G", name: "Evidencias Gestión P.", creditos: 10, color: COLORS.default, req: [] },
        { id: "EAA1210", name: "Contabilidad I", creditos: 10, color: COLORS.profesional, req: [] },
        { id: "ADP201C", name: "Pol. en Gestión y PP", creditos: 10, color: COLORS.profesional, req: ["ICP101"] },
        { id: "ADP201D", name: "Régimen Jurídico", creditos: 10, color: COLORS.profesional, req: ["ADP002D"] },
        { id: "OFG4", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 6", ramos: [
        { id: "ADP2011", name: "Operaciones Serv. Púb.", creditos: 10, color: COLORS.profesional, req: ["EYP1010"] },
        { id: "ADP201G", name: "Eval. Programas Púb.", creditos: 10, color: COLORS.profesional, req: ["ADP004G"] },
        { id: "ADP202G", name: "Admin. Financiera", creditos: 10, color: COLORS.profesional, req: ["EAE11A", "ADP001E"] },
        { id: "MIN1", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "OFG5", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // --- AÑO 4 ---
    { title: "Semestre 7", ramos: [
        { id: "ADP2021", name: "Gestión Innovación", creditos: 10, color: COLORS.profesional, req: [] },
        { id: "ADP201E", name: "Gestión Personas", creditos: 10, color: COLORS.profesional, req: ["ADP001S"] },
        { id: "MIN2", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "MIN3", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "OFG6", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 8", ramos: [
        { id: "ADP2031", name: "Transformación Digital", creditos: 10, color: COLORS.profesional, req: [] },
        { id: "ADP203G", name: "Capstone (Proyectos)", creditos: 10, color: COLORS.profesional, req: ["ADP2011"] },
        { id: "MIN4", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "MIN5", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "OFG7", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // --- AÑO 5 ---
    { title: "Semestre 9", ramos: [
        { id: "ADP301G", name: "Ética y PP", creditos: 5, color: COLORS.default, req: [] },
        { id: "ADP302G", name: "Probidad y Transp.", creditos: 5, color: COLORS.default, req: [] },
        { id: "ADP301E", name: "Habilidades Directivas", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP303G", name: "Auditoría Gubernamental", creditos: 10, color: COLORS.default, req: [] },
        { id: "OPROF", name: "Opt. Profundización", creditos: 20, color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 10", ramos: [
        { id: "ADP306G", name: "Práctica Profesional", creditos: 35, color: COLORS.default, req: ["ADP203G"] },
        { id: "ADP305G", name: "Entorno y Relación", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP304G", name: "Ética Profesional", creditos: 5, color: COLORS.default, req: [] }
    ]}
];

// Estado global de aprobados
let aprobados = [];

// Función para convertir números a romanos
function toRoman(num) {
    const roman = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };
    return roman[num] || num;
}

// 1. Cargar datos del LocalStorage
function cargarProgreso() {
    const data = localStorage.getItem('mallaAprobadosAPUC');
    if (data) {
        aprobados = JSON.parse(data);
    }
}

// 2. Guardar datos en LocalStorage
function guardarProgreso() {
    localStorage.setItem('mallaAprobadosAPUC', JSON.stringify(aprobados));
}

// 3. Inicializar la malla (Dibujar HTML)
function initMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';
    
    // Cargar lo guardado antes de dibujar
    cargarProgreso();

    // Agrupar por Años
    for (let i = 0; i < malla.length; i += 2) {
        const yearIndex = (i / 2) + 1;
        
        // Columna AÑO
        const anioCol = document.createElement('div');
        anioCol.className = 'anio-col';
        
        const anioHeader = document.createElement('div');
        anioHeader.className = 'anio-header';
        anioHeader.innerText = `Año ${yearIndex}`;
        anioCol.appendChild(anioHeader);

        // Wrapper Semestres
        const semestresWrapper = document.createElement('div');
        semestresWrapper.className = 'semestres-wrapper';

        for (let j = i; j < i + 2 && j < malla.length; j++) {
            const semData = malla[j];
            const semCol = document.createElement('div');
            semCol.className = 'semestre-col';

            const semHeader = document.createElement('div');
            semHeader.className = 'semestre-header';
            semHeader.innerText = toRoman(j + 1);
            semCol.appendChild(semHeader);

            const ramosList = document.createElement('div');
            ramosList.className = 'ramos-list';

            semData.ramos.forEach(ramo => {
                const rEl = document.createElement('div');
                rEl.className = 'ramo';
                rEl.id = ramo.id;
                rEl.innerText = `${ramo.name}`; // Solo nombre por limpieza visual
                // Guardamos info útil en atributos data
                rEl.dataset.creditos = ramo.creditos;
                rEl.style.backgroundColor = ramo.color;
                
                // Evento Click
                rEl.onclick = () => toggleRamo(ramo.id);
                
                ramosList.appendChild(rEl);
            });

            semCol.appendChild(ramosList);
            semestresWrapper.appendChild(semCol);
        }

        anioCol.appendChild(semestresWrapper);
        container.appendChild(anioCol);
    }
    
    // Una vez dibujado, actualizamos colores y bloqueos
    actualizarEstadoVisual();
}

// 4. Lógica al hacer clic
function toggleRamo(id) {
    const el = document.getElementById(id);
    if (el.classList.contains('bloqueado')) return; // No hacer nada si está bloqueado

    if (aprobados.includes(id)) {
        // Si ya estaba aprobado, lo sacamos
        aprobados = aprobados.filter(r => r !== id);
        // Opcional: Limpiar dependencias futuras (si desapruebo Cálculo, se desaprueba Ecuaciones)
        limpiarDependencias(id);
    } else {
        // Si no estaba, lo agregamos
        aprobados.push(id);
    }

    guardarProgreso();
    actualizarEstadoVisual();
}

// Función recursiva para desmarcar ramos si desmarco un prerrequisito
function limpiarDependencias(idPadre) {
    malla.forEach(sem => {
        sem.ramos.forEach(r => {
            if (r.req.includes(idPadre) && aprobados.includes(r.id)) {
                aprobados = aprobados.filter(x => x !== r.id);
                limpiarDependencias(r.id);
            }
        });
    });
}

// 5. Motor de validación visual y Créditos
function actualizarEstadoVisual() {
    let creditosAcumulados = 0;
    let totalCreditosMalla = 0;

    malla.forEach(sem => {
        sem.ramos.forEach(r => {
            const el = document.getElementById(r.id);
            totalCreditosMalla += r.creditos;

            // Verificar Prerrequisitos
            const reqCumplidos = r.req.every(reqId => aprobados.includes(reqId));

            if (!reqCumplidos) {
                // Bloqueado
                el.classList.add('bloqueado');
                el.classList.remove('aprobado');
                el.title = `Falta: ${r.req.join(', ')}`;
            } else {
                // Desbloqueado
                el.classList.remove('bloqueado');
                
                // ¿Está aprobado?
                if (aprobados.includes(r.id)) {
                    el.classList.add('aprobado');
                    creditosAcumulados += r.creditos;
                } else {
                    el.classList.remove('aprobado');
                }
                el.title = `Créditos: ${r.creditos}`;
            }
        });
    });

    // Actualizar Barra de Progreso
    const porcentaje = Math.round((creditosAcumulados / totalCreditosMalla) * 100);
    
    // Actualizamos el DOM (asegúrate de que estos IDs existan en tu HTML)
    const porcText = document.getElementById('porcentaje');
    const barra = document.getElementById('barra');
    
    if(porcText) porcText.innerText = `${porcentaje}% (${creditosAcumulados} Cr.)`;
    if(barra) barra.style.width = `${porcentaje}%`;
}

// Iniciar cuando carga la página
document.addEventListener('DOMContentLoaded', initMalla);

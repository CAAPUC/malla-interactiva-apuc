
// --- DATOS DE LA CARRERA ---
const COLORS = {
    general: "#a6bec1",       
    profesional: "#815db7",   
    minor: "#df97b9",         
    default: "#b57edc"        
};

const malla = [
    // AÑO 1
    { title: "Semestre 1", ramos: [
        { id: "MAT1000", name: "Precálculo", creditos: 10, color: COLORS.default, req: [] },
        { id: "ICP101", name: "Introducción a la Ciencia Política", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP002G", name: "Gestión Pública I", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP001G", name: "Justicia y Bien Común", creditos: 10, color: COLORS.default, req: [] },
        { id: "FIL2001", name: "Filosofía ¿Para qué?", creditos: 10, color: COLORS.general, req: [] },
        { id: "VRA100C", name: "Exámen Comunicación Escrita", creditos: 0, color: COLORS.default, req: [] }, 
        { id: "VRA2000", name: "English Test Alte 2", creditos: 0, color: COLORS.default, req: [] },
        { id: "VRA4000", name: "Integridad Académica en la UC", creditos: 0, color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 2", ramos: [
        { id: "MAT1100", name: "Cálculo I", creditos: 10, color: COLORS.default, req: ["MAT1000"] },
        { id: "EAE11A", name: "Introducción a la Microeconomía", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP001S", name: "Comportamiento Organizacional", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP001D", name: "Introducción al Derecho", creditos: 10, color: COLORS.default, req: [] },
        { id: "OFG1", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // AÑO 2
    { title: "Semestre 3", ramos: [
        { id: "EYP1010", name: "Probabilidad y Estadística", creditos: 10, color: COLORS.default, req: ["MAT1100"] },
        { id: "ADP001E", name: "Fundamentos de la Macroeconomía", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP003G", name: "Gestión Pública II", creditos: 10, color: COLORS.default, req: [] },
        { id: "GOB1001", name: "Introducción a las Políticas Públicas", creditos: 10, color: COLORS.default, req: [] },
        { id: "OFG2", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 4", ramos: [
        { id: "ADP004G", name: "Métodos Aplicados a la Gestión Pública", creditos: 10, color: COLORS.default, req: ["EYP1010"] },
        { id: "ADP002E", name: "Economía del Sector Público", creditos: 10, color: COLORS.default, req: ["ADP001E"] },
        { id: "ICP103", name: "Introducción a la Política Comparada", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP002D", name: "Instituciones y Garantías del Estado", creditos: 10, color: COLORS.default, req: [] },
        { id: "OFG3", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // AÑO 3
    { title: "Semestre 5", ramos: [
        { id: "ADP005G", name: "Evidencias para la Gestión Pública", creditos: 10, color: COLORS.default, req: [] },
        { id: "EAA1210", name: "Contabilidad I", creditos: 10, color: COLORS.profesional, req: [] },
        { id: "ADP201C", name: "Política en Gestión y Políticas Públicas", creditos: 10, color: COLORS.profesional, req: ["ICP101"] },
        { id: "ADP201D", name: "Régimen Jurídico de la Administración del Estado", creditos: 10, color: COLORS.profesional, req: ["ADP002D"] },
        { id: "OFG4", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 6", ramos: [
        { id: "ADP2011", name: "Operaciones de Servicios Públicos", creditos: 10, color: COLORS.profesional, req: ["EYP1010"] },
        { id: "ADP201G", name: "Evaluación de Programas Públicos", creditos: 10, color: COLORS.profesional, req: ["ADP004G"] },
        { id: "ADP202G", name: "Administración Financiera del Estado", creditos: 10, color: COLORS.profesional, req: ["EAE11A", "ADP001E"] },
        { id: "MIN1", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "OFG5", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // AÑO 4
    { title: "Semestre 7", ramos: [
        { id: "ADP2021", name: "Gestión de Innovación y Tecnología", creditos: 10, color: COLORS.profesional, req: [] },
        { id: "ADP201E", name: "Gestión de Personas en el Sector Público", creditos: 10, color: COLORS.profesional, req: ["ADP001S"] },
        { id: "MIN2", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "MIN3", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "OFG6", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    { title: "Semestre 8", ramos: [
        { id: "ADP2031", name: "Transformación Digital", creditos: 10, color: COLORS.profesional, req: [] },
        { id: "ADP203G", name: "Gestión de Proyectos Públicos (Capstone)", creditos: 10, color: COLORS.profesional, req: ["ADP2011"] },
        { id: "MIN4", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "MIN5", name: "Minor", creditos: 10, color: COLORS.minor, req: [] },
        { id: "OFG7", name: "OFG", creditos: 10, color: COLORS.general, req: [] }
    ]},
    // AÑO 5
    { title: "Semestre 9", ramos: [
        { id: "ADP301G", name: "Ética y Políticas Públicas", creditos: 5, color: COLORS.default, req: [] },
        { id: "ADP302G", name: "Probidad y Transparencia", creditos: 5, color: COLORS.default, req: [] },
        { id: "ADP301E", name: "Habilidades Directivas", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP303G", name: "Auditoría Gubernamental", creditos: 10, color: COLORS.default, req: [] },
        { id: "OPROF", name: "Optativo de Profundización", creditos: 20, color: COLORS.default, req: [] }
    ]},
    { title: "Semestre 10", ramos: [
        { id: "ADP306G", name: "Práctica Profesional", creditos: 35, color: COLORS.default, req: ["ADP203G"] },
        { id: "ADP305G", name: "Entorno y Relación", creditos: 10, color: COLORS.default, req: [] },
        { id: "ADP304G", name: "Ética Profesional", creditos: 5, color: COLORS.default, req: [] }
    ]}
];

// Estado de ramos aprobados
let aprobados = [];

// Mapa auxiliar para encontrar nombres por ID rápidamente (Para el tooltip)
const nombresRamos = {};
malla.forEach(sem => sem.ramos.forEach(r => nombresRamos[r.id] = r.name));

// Convertir número a romano
function toRoman(num) {
    const roman = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };
    return roman[num] || num;
}

// Cargar LocalStorage
function cargarProgreso() {
    const data = localStorage.getItem('mallaAprobadosAPUC');
    if (data) {
        aprobados = JSON.parse(data);
    }
}

// Guardar LocalStorage
function guardarProgreso() {
    localStorage.setItem('mallaAprobadosAPUC', JSON.stringify(aprobados));
}

// --- FUNCIÓN GENERAR TOOLTIP (Información Flotante) ---
function generarTooltip(ramo) {
    let texto = `Sigla: ${ramo.id}\nCréditos: ${ramo.creditos}`;
    
    if (ramo.req.length > 0) {
        // Busca los nombres reales de los prerrequisitos
        const nombresReq = ramo.req.map(id => nombresRamos[id] || id).join(', ');
        texto += `\nRequisito: ${nombresReq}`;
    } else {
        texto += `\nRequisito: No tiene`;
    }
    return texto;
}

// --- DIBUJAR MALLA ---
function initMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';
    cargarProgreso();

    // Loop por Años (de 2 en 2 semestres)
    for (let i = 0; i < malla.length; i += 2) {
        const yearIndex = (i / 2) + 1;
        const anioCol = document.createElement('div');
        anioCol.className = 'anio-col';
        
        const anioHeader = document.createElement('div');
        anioHeader.className = 'anio-header';
        anioHeader.innerText = `Año ${yearIndex}`;
        anioCol.appendChild(anioHeader);

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
                rEl.innerText = ramo.name;
                rEl.style.backgroundColor = ramo.color;
                
                // --- ACTIVAMOS EL TOOLTIP ---
                rEl.setAttribute('data-info', generarTooltip(ramo));
                
                // --- ACTIVAMOS EL CLIC ---
                rEl.onclick = function() { toggleRamo(ramo.id); };
                
                ramosList.appendChild(rEl);
            });

            semCol.appendChild(ramosList);
            semestresWrapper.appendChild(semCol);
        }
        anioCol.appendChild(semestresWrapper);
        container.appendChild(anioCol);
    }
    actualizarEstadoVisual();
}

// --- LÓGICA DE CLIC ---
function toggleRamo(id) {
    const el = document.getElementById(id);
    
    // Si está bloqueado, no hacemos nada
    if (el.classList.contains('bloqueado')) {
        // Efecto visual de "error" opcional
        el.style.transform = "translateX(5px)";
        setTimeout(() => el.style.transform = "none", 100);
        return; 
    }

    if (aprobados.includes(id)) {
        aprobados = aprobados.filter(r => r !== id);
        limpiarDependencias(id);
    } else {
        aprobados.push(id);
    }

    guardarProgreso();
    actualizarEstadoVisual();
}

// Desmarcar recursivo
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

// --- ACTUALIZAR COLORES Y CANDADOS ---
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
                // BLOQUEADO
                el.classList.add('bloqueado');
                el.classList.remove('aprobado');
                if (!el.innerText.includes("🔒")) el.innerText = "🔒 " + r.name;
            } else {
                // DESBLOQUEADO
                el.classList.remove('bloqueado');
                
                if (aprobados.includes(r.id)) {
                    // APROBADO
                    el.classList.add('aprobado');
                    if (!el.innerText.includes("✅")) el.innerText = "✅ " + r.name;
                    creditosAcumulados += r.creditos;
                } else {
                    // DISPONIBLE (Pendiente)
                    el.classList.remove('aprobado');
                    el.innerText = r.name; // Texto normal
                }
            }
        });
    });

    // Actualizar Barra
    const porcentaje = Math.round((creditosAcumulados / totalCreditosMalla) * 100);
    const barra = document.getElementById('barra');
    const texto = document.getElementById('porcentaje');
    if(barra) barra.style.width = `${porcentaje}%`;
    if(texto) texto.innerText = `${porcentaje}% (${creditosAcumulados} Cr.)`;
}

// Iniciar al cargar
document.addEventListener('DOMContentLoaded', initMalla);


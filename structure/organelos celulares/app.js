
const topicDropdown = document.getElementById("topicDropdown");
const selectedTopic = document.getElementById("selectedTopic");
const nucleoInfo = document.getElementById("nucleoInfo");
const citoplasmaInfo = document.getElementById("citoplasmaInfo");
const membranaInfo = document.getElementById("membranaInfo");
const mitocondrias = document.getElementById("mitocondriaInfo");
const reticuloInfo = document.getElementById("reticuloInfo");
const ribosomasInfo = document.getElementById("ribosomasInfo");
const golgiInfo= document.getElementById("GolgiInfo");
const LisosomasInfo = document.getElementById("libosomasInfo");
const centrioloInfo = document.getElementById("centrioloInfo");
const cloroplastosInfo = document.getElementById("cloroplastosInfo");
const vacuolaInfo = document.getElementById("vacuolaInfo");
const nucleolo = document.getElementById("nucleoloInfo");

topicDropdown.addEventListener("change", function() {
    const selectedValue = topicDropdown.value;
    selectedTopic.textContent = obtenerNombreTema(selectedValue);
    ocultarTodosLosContenedoresDeInformacion();
    
    // Mostrar el contenedor de información específico para el Núcleo si se selecciona
    if (selectedValue === "1") {
        nucleoInfo.style.display = "block";
    }
    if (selectedValue === "2") {
        citoplasmaInfo.style.display = "block";
    }
    if (selectedValue === "3") {
        membranaInfo.style.display = "block";
    }
    if (selectedValue === "4") {
        mitocondrias.style.display = "block";
    }
    if (selectedValue === "5") {
        reticuloInfo.style.display = "block";
    }
    if (selectedValue === "6") {
        ribosomasInfo.style.display = "block";
    }
    if (selectedValue === "7") {
        golgiInfo.style.display = "block";
    }
    if (selectedValue === "8") {
        LisosomasInfo.style.display = "block";
    }
    if (selectedValue === "9") {
        centrioloInfo.style.display = "block";
    }
    if (selectedValue === "10") {
        cloroplastosInfo.style.display = "block";
    }
    if (selectedValue === "11") {
        vacuolaInfo.style.display = "block";
    }
    if (selectedValue === "12") {
        nucleolo.style.display = "block";
    }
});

// Función para obtener el nombre del tema basado en su valor
function obtenerNombreTema(value) {
    switch (value) {
        case "1":
            return "Núcleo";
        case "2":
            return "Citoplasma";
        case "3":
            return "Membrana Celular";
        case "4":
            return "Mitocondrias";
        case "5":
            return "Retículo Endoplasmático";
        case "6":
            return "Ribosomas";
        case "7":
            return "Complejo de Golgi";
        case "8":
            return "Lisosomas";
        case "9":
            return "Centriolos";
        case "10":
            return "Cloroplastos";
        case "11":
            return "Vacuola";
        case "12":
            return "Nucléolo";
        default:
            return "Tema desconocido";
    }
}

// Función para ocultar todos los contenedores de información
function ocultarTodosLosContenedoresDeInformacion() {
    const contenedoresDeInformacion = document.querySelectorAll(".info");
    for (const contenedor of contenedoresDeInformacion) {
        contenedor.style.display = "none";
    }
}

//-----BLOQUE PRINCIPAL-----
selectedTopic.textContent = obtenerNombreTema(topicDropdown.value);

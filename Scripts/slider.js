document.addEventListener("DOMContentLoaded", function() {
    // Verificar si estamos en la página de inicio (para cargar el slider)
    if (window.location.pathname === '/inicioo.php' || window.location.pathname === '/TuAnimeTec/inicioo.php') {
        loadAnimeData(); // Cargar el slider
    }
});

// Variables globales
let currentIndex = 0;  // Índice global
let sliderInterval;     // Intervalo global
let isThrottled = false; // Variable para manejar el "throttle" de clics

// Función para cargar los animes desde la API de Jikan
async function loadAnimeData() {
    const slider = document.querySelector(".anime-slider");
    try {
        // Limpiar el contenido previo del slider antes de cargar nuevos animes
        slider.innerHTML = '';

        const response = await fetch("https://api.jikan.moe/v4/anime");
        const data = await response.json();
        const animeList = data.data; // Obtener todos los animes disponibles

        // Crear un slider con las imágenes de los animes
        for (let anime of animeList) {
            const animeElement = document.createElement("div");
            animeElement.classList.add("anime-slide");

            // Traducción del resumen (puedes usar una función de traducción si es necesario)
            const translatedSynopsis = await translateToSpanish(anime.synopsis);

            // Crear la estructura de HTML para el slider
            animeElement.innerHTML = `
                <div class="anime-image">
                    <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                </div>
                <div class="anime-info">
                    <div class="anime-title">${anime.title}</div>
                    <div class="anime-summary">${translatedSynopsis}</div>
                </div>
            `;
            slider.appendChild(animeElement);
        }

        // Iniciar el slider después de cargar los datos
        startSlider();  // Inicia el movimiento del slider
    } catch (error) {
        console.error("Error al cargar los datos de los animes:", error);
    }
}

// Función para traducir el texto al español (utilizando un API o servicio)
async function translateToSpanish(text) {
    // Aquí se podría usar una API de traducción como Google Translate API
    // En este ejemplo vamos a simular la traducción (puedes reemplazarla con una llamada real)

    const translatedText = text; // Aquí deberías realizar la traducción real
    return translatedText; // Regresamos el texto tal cual (simulando que ya está traducido)
}

// Función para mover el slider
function moveSlider() {
    const slides = document.querySelectorAll(".anime-slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".anime-slider");

    // Si estamos al final, reiniciamos el índice para crear un ciclo infinito
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Reiniciar el índice para el primer anime
    }

    // Mover el slider usando transform
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;  // Asegúrate de que se mueva correctamente
    currentIndex++;  // Incrementar el índice para la siguiente imagen
}

// Función para manejar el "throttling" (retraso) de clics
function throttleSliderMovement() {
    if (isThrottled) return; // Si ya estamos en espera, no hacer nada

    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
    }, 800);  // Espera 800ms (puedes ajustar el tiempo según sea necesario)
}

// Iniciar el slider
function startSlider() {
    // Iniciar el intervalo para mover el slider cada 5 segundos
    sliderInterval = setInterval(moveSlider, 5000);

    // Para asegurar que el slider se mueva al hacer clic en los botones
    document.querySelector(".prev").addEventListener("click", function() {
        throttleSliderMovement(); // Manejar el "throttling" de clics
        clearInterval(sliderInterval); // Detener el intervalo
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;  // Decrementar el índice
        moveSlider();  // Mover el slider al anterior
        startSlider();  // Reiniciar el intervalo para que siga moviéndose
    });

    document.querySelector(".next").addEventListener("click", function() {
        throttleSliderMovement(); // Manejar el "throttling" de clics
        clearInterval(sliderInterval); // Detener el intervalo
        moveSlider();  // Mover el slider al siguiente
        startSlider();  // Reiniciar el intervalo para que siga moviéndose
    });
}

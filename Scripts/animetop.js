// Función para cargar las estrellas según la calificación (de 1-10 a 5 estrellas)
function getStars(score) {
    if (score == null || score === 0) {
        return 'N/A';  // Si no hay calificación o es 0, se muestra "N/A"
    }

    // Escalar la calificación de 1-10 a una escala de 0-5
    const scaledScore = Math.round(score / 2); // Ejemplo: 8 de 10 se convierte en 4

    const fullStars = Math.floor(scaledScore); // Estrellas llenas
    const halfStar = (scaledScore % 1) >= 0.5 ? 1 : 0; // Media estrella si el decimal es >= 0.5
    const emptyStars = 5 - fullStars - halfStar; // Estrellas vacías para completar las 5

    let starsHtml = '';

    // Añadir estrellas llenas
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }

    // Añadir media estrella si corresponde
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    // Añadir estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
}

// Función para cargar los animes más populares desde la API de Jikan
async function loadTopAnimes() {
    try {
        const totalPages = 5; // Número de páginas que quieres cargar (ajustable)
        const animeContainer = document.getElementById('anime-list');
        animeContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar los nuevos animes

        // Hacer peticiones a la API para cargar más de una página
        for (let page = 1; page <= totalPages; page++) {
            const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
            const data = await response.json();
            const animeList = data.data;

            // Crear una tarjeta para cada anime
            animeList.forEach(anime => {
                const animeCard = document.createElement('div');
                animeCard.classList.add('anime-card');

                animeCard.innerHTML = `
                    <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}">
                    <div class="anime-info">
                        <h3>${anime.title}</h3>
                        <p class="calificacion">Calificación: ${anime.score ? getStars(anime.score) : 'N/A'}</p>
                        <p>Género: ${anime.genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                `;

                // Agregar la tarjeta al contenedor
                animeContainer.appendChild(animeCard);
            });
        }
    } catch (error) {
        console.error("Error al cargar los animes:", error);
    }
}

// Llamar a la función cuando la página se haya cargado
window.onload = loadTopAnimes;

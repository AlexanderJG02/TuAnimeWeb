document.addEventListener("DOMContentLoaded", function() {
    // Añadir el evento de búsqueda
    document.getElementById("search-bar").addEventListener("keyup", function(e) {
        const searchTerm = e.target.value.trim(); // Eliminar espacios al inicio y final
        if (searchTerm.length > 0) {
            searchAnime(searchTerm);  // Buscar anime al escribir
        } else {
            clearSearchResults();  // Limpiar los resultados si no hay texto
        }
    });
});

// Función para buscar animes a través de la API de Jikan
async function searchAnime(searchTerm) {
    const searchResultsContainer = document.getElementById("search-results");

    try {
        // Limpiar los resultados anteriores
        searchResultsContainer.innerHTML = '';

        // Solicitar datos de la API de Jikan con el término de búsqueda
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=5`);
        const data = await response.json();
        const animeList = data.data; // Obtener los animes que coinciden con la búsqueda

        // Verificar si hay resultados
        if (animeList.length > 0) {
            // Crear los elementos de resultados de búsqueda
            animeList.forEach(anime => {
                const resultItem = document.createElement("li");
                resultItem.classList.add("search-result-item");

                // Crear el contenido de cada elemento de resultado
                resultItem.innerHTML = `
                    <div class="search-result-title">${anime.title}</div>
                    <div class="search-result-image">
                        <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="50">
                    </div>
                `;
                // Agregarlo al contenedor de resultados
                searchResultsContainer.appendChild(resultItem);
            });

            // Mostrar los resultados
            searchResultsContainer.classList.add("show");
        } else {
            // Si no hay resultados, mostrar un mensaje
            searchResultsContainer.innerHTML = "<li>No se encontraron resultados.</li>";
            searchResultsContainer.classList.add("show");
        }

    } catch (error) {
        console.error("Error al buscar los animes:", error);
        searchResultsContainer.innerHTML = "<li>Error en la búsqueda.</li>";
        searchResultsContainer.classList.add("show");
    }
}

// Limpiar los resultados cuando no hay texto en el campo de búsqueda
function clearSearchResults() {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.classList.remove("show");
    searchResultsContainer.innerHTML = '';  // Limpiar los resultados
}

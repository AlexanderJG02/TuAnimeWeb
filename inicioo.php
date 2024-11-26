<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TuAnimeTec</title>
    <link rel="stylesheet" href="Estilo/style.css">
    <!-- FontAwesome para los iconos -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
</head>
<body>
    <header class="top-bar">
        <div class="top-bar-content">
            <a href="inicioo.php">
                <img src="img/pikachu.png" alt="Logo" class="logo">
            </a>
            <h1>TuAnimeTec</h1>

            <nav class="top-nav">
                <ul>
                    <li><a href="inicioo.php">Inicio</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Anime</a>
                        <div class="dropdown-content">
                            <a href="mejores.php">Top Animes</a>
                        </div>
                    </li>
                    <li><a href="acerca.php">Nosotros</a></li>
                    <li><a href="contacto.php">Contacto</a></li>
                </ul>
            </nav>

            <div class="search-bar">
                <input type="text" placeholder="Buscar anime..." id="search-bar">
                <ul id="search-results" class="search-results"></ul> <!-- Resultados de búsqueda -->
            </div>

            <div class="top-bar-icons">
                <i class="fas fa-cog" title="Configuración"></i>
                <i class="fas fa-adjust" id="theme-toggle" title="Cambiar Tema"></i>
            </div>
        </div>
    </header>

    <!-- Slider -->
    <section class="slider">
        <div class="slider-container">
            <div class="slider-images anime-slider">
                <!-- Los animes se cargarán aquí dinámicamente desde la API -->
            </div>
            <div class="slider-navigation">
                <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
                <button class="next" onclick="moveSlide(1)">&#10095;</button>
            </div>
        </div>
    </section>

    <script src="Scripts/dark.js" defer></script>
    <script src="Scripts/slider.js" defer></script>
    <script src="Scripts/api.js" defer></script>
    <script src="Scripts/searchs.js" defer></script>
</body>
</html>

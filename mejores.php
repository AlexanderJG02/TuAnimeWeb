<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimeTops</title>
    <link rel="stylesheet" href="Estilo/style.css">
    <link rel="stylesheet" href="Estilo/anime.css">

    <!-- FontAwesome para los iconos -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
</head>
<body>
    <header class="top-bar">
        <div class="top-bar-content">
            <!-- Logo y Nombre del Sitio -->
            <a href="inicioo.php">
                <img src="img/pikachu.png" alt="Logo" class="logo"> 
            </a>
            <h1>TuAnimeTec</h1>  <!-- Nombre del sitio -->
            
            <!-- Menú de Navegación -->
            <nav class="top-nav">
                <ul>                    
                    <!-- Menú desplegable para Anime -->
                    <li class="dropdown">
                        <a href="#" class="dropbtn">Anime</a>
                        <div class="dropdown-content">
                        </div>
                    </li>

                    <li><a href="acerca.php">Nosotros</a></li>
                    <li><a href="contacto.php">Contacto</a></li>
                </ul>
            </nav>
            
            <!-- Barra de Búsqueda -->
            <div class="search-bar">
                <input type="text" placeholder="Buscar anime..." id="search-bar">
                <ul id="search-results" class="search-results"></ul> <!-- Resultados de búsqueda -->
            </div>
            
            <!-- Íconos de configuración y tema -->
            <div class="top-bar-icons">
                <i class="fas fa-cog" title="Configuración"></i>
                <!-- Ícono para cambiar tema -->
                <i class="fas fa-adjust" id="theme-toggle" title="Cambiar Tema"></i>
            </div>
        </div>
    </header>

    <!-- Contenedor de los Top Animes -->
    <section class="top-animes">
        <h2>Top Animes</h2>
        <div class="anime-cards" id="anime-list">
            <!-- Los animes se cargarán aquí dinámicamente -->
        </div>
    </section>

    <!-- Aquí está la referencia al archivo JS externo -->
    <script src="Scripts/animetop.js" defer></script>

    <script src="Scripts/dark.js" defer></script>
    <script src="Scripts/searchs.js" defer></script>

</body>
</html>

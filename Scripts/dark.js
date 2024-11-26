// Seleccionar el ícono de cambio de tema
const themeToggle = document.getElementById('theme-toggle');

// Agregar un listener para el evento de clic
themeToggle.addEventListener('click', () => {
    // Alternar la clase "light-mode" en el body
    document.body.classList.toggle('light-mode');

    // Cambiar el ícono dependiendo del tema activo
    if (document.body.classList.contains('light-mode')) {
        themeToggle.classList.replace('fa-adjust', 'fa-sun');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-adjust');
    }
});

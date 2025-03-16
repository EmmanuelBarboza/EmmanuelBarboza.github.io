document.addEventListener('DOMContentLoaded', function () {
    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    // Mapeo de tecnologías a rutas de íconos, incluyendo Android
    const techIcons = {
        java: 'img/java.ico',
        csharp: 'img/c-sharp.png',
        godot: 'img/godot.ico',
        python: 'img/python.ico',
        web: 'img/web.ico',
        android: 'img/android.ico' // Ícono de Android añadido
    };

    // Función para generar íconos de tecnologías
    function generateTechIcons(techString) {
        const techList = techString.split(' ');
        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('project-tech-icons');

        techList.forEach(tech => {
            if (techIcons[tech]) {
                const icon = document.createElement('img');
                icon.src = techIcons[tech];
                icon.alt = `${tech} icon`;
                iconsContainer.appendChild(icon);
            }
        });

        return iconsContainer;
    }

    // Añadir íconos a cada proyecto
    projectCards.forEach(card => {
        const tech = card.getAttribute('data-tech');
        const iconsContainer = generateTechIcons(tech);
        card.insertBefore(iconsContainer, card.firstChild);
    });

    // Filtrado de proyectos
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase 'active' al botón clickeado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const tech = card.getAttribute('data-tech');
                if (filter === 'all' || tech.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Desplazamiento suave
    document.querySelectorAll('.navbar-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

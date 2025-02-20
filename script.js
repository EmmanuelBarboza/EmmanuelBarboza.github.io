document.addEventListener('DOMContentLoaded', function () {
    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase 'active' al botón clickeado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const tech = card.getAttribute('data-tech');
                if (filter === 'all' || tech === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
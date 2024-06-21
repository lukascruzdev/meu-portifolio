document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.querySelector(`#${this.dataset.section}`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

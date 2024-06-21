document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(this.dataset.section);
        targetSection.classList.add('active');
    });
});

// Ativar a primeira seção por padrão
document.getElementById('about').classList.add('active');

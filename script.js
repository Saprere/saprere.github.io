document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Fonctionnalité "Back to Top"
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Fonctionnalité de mode sombre
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode';
        } else {
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
});
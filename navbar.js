const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-body');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-body');
        navbar.classList.add('bg-transparent');
    }
});
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 100) {
        // Add the 'bg-primary' class when the user scrolls down
        navbar.classList.add('bg-body');
        navbar.classList.remove('bg-transparent');
    } else {
        // Remove the 'bg-primary' class when at the top
        navbar.classList.remove('bg-body');
        navbar.classList.add('bg-transparent');
    }
});

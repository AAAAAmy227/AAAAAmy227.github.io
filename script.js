// script.js
document.addEventListener('scroll', function () {
    const glassEffect = document.querySelector('.glass-effect');
    const scrollPosition = window.scrollY;
    const movement = scrollPosition * 0.5; // Control the movement speed
    glassEffect.style.transform = `translateY(${movement}px)`;
});

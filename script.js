AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = '#f8f9fa';
        navbar.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeIn 1s ease-in';
        });
    });
});

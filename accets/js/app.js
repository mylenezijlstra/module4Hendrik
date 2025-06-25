let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Start met de eerste slide actief
slides[0].classList.add('active');

function showSlides() {
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000);

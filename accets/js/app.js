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

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.manual-carousel .manual-slides');
    const slides = Array.from(wrapper.children);
    let current = 0;

    function update() {
        wrapper.style.transform = `translateX(-${current * 100}%)`;
    }

    document.querySelector('.manual-prev').addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        update();
    });

    document.querySelector('.manual-next').addEventListener('click', () => {
        current = (current + 1) % slides.length;
        update();
    });

    update();
});






const autoSlides = document.querySelectorAll('.auto-slide');
    let autoIndex = 0;

    function showAutoSlide(index) {
        autoSlides.forEach(slide => slide.classList.remove('active'));
        autoSlides[index].classList.add('active');
    }

    setInterval(() => {
        autoIndex = (autoIndex + 1) % autoSlides.length;
        showAutoSlide(autoIndex);
    }, 4000);

    showAutoSlide(autoIndex);
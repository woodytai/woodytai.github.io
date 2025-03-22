const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const maxIndex = items.length - 1;

    // Calculate the index based on scroll percentage
    const index = Math.min(maxIndex, Math.floor((scrollTop / scrollHeight) * items.length));

    if (index !== currentIndex) {
        currentIndex = index;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

document.getElementById('skipButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Go to the next item
    updateCarousel();
});
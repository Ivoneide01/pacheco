let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    document.querySelector(".slider").style.transform = `translateX(-${currentSlide * 100}%)`;
}


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.transform = `translateX(${(i - slideIndex) * 100}%) scale(0.8)`;
    }
    slides[slideIndex].style.opacity = "1";
    slides[slideIndex].style.transform = `translateX(0%) scale(1)`;
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}


showSlides();

// 오토 슬라이드
// setInterval(() => {
//     plusSlides(1);
// }, 4000); 
const slides = document.querySelectorAll('.carousel__slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showSlide(n){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}
    prevBtn.addEventListener('click',() => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
    nextBtn.addEventListener('click',() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });
    setInterval(() =>{
        index = (index +1) % slides.length;
        showSlide(index);
}  ,4000);

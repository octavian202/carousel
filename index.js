const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const slideIndicator = document.querySelector('.slide-indicator')


/* Previous & Next Button section */

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideSlide() {
    slides[slidePosition].classList.remove('carousel-item-visible');
    slides[slidePosition].classList.add('carousel-item-hidden');
}

function showSlide() {
    slides[slidePosition].classList.add("carousel-item-visible");
}


function slideLeftPrev() {
    slides[slidePosition].style.animation = 'slideToLeftOut 0.5s'
    hideSlide();
}

function slideLeftNext() {
    slides[slidePosition].style.animation = 'slideToLeftIn 0.5s'
    showSlide();
}

function slideRightPrev() {
    slides[slidePosition].style.animation = 'slideToRightIn 0.5s'
    showSlide();
}

function slideRightNext() {
    slides[slidePosition].style.animation = 'slideToRightOut 0.5s'
    hideSlide();
}



function moveToNextSlide() {
    slideLeftPrev();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slideLeftNext()
}

function moveToPrevSlide() {
    slideRightNext();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slideRightPrev();
}




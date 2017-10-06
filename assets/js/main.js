/* Slider */
let slideIndex = 1;
let slides = document.getElementsByClassName("slider");
let dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;

    if (n > slides.length) { n = slideIndex = slides.length }
    if (n < 1) { n = slideIndex = 1}

    switch(n) {
        case 1:
            $(slides).animate({
                left: '0%'
            }, 300);
            break;
        case 2:
            $(slides).animate({
                left: '-20%'
            }, 300);
            break;
        default:
            $(slides).animate({
                left: '-40%'
            }, 300);
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
}

/* Scroll Top */
function scrollToTop() {
    let timeOut;
    if(document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 10);

    }
    else clearTimeout(timeOut);
}
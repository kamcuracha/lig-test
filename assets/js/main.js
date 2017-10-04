/* Slider */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    console.log('n is: ' + n);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = slides.length} 
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

/* Scroll to top */
$(document).ready(function() {
    $('.btn-back2top').click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
});
// Image Slider for Certificates
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("certificate");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.has-submenu');

    dropdowns.forEach((item) => {
        item.addEventListener('mouseenter', function () {
            this.querySelector('.submenu').style.display = 'block';
        });

        item.addEventListener('mouseleave', function () {
            this.querySelector('.submenu').style.display = 'none';
        });

        const links = item.querySelectorAll('.submenu a');

        links.forEach((link) => {
            link.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        });
    });
});


// Smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



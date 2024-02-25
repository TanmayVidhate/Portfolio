let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick =()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle("active");
}

let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");


        if (top >= offset && top<offset+height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector(".header");
    header.classList.toggle('sticky',window.scrollY > 100);

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 310,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let darkmodeIcon =document.querySelector("#darkMode-icon");

darkmodeIcon.onclick=()=>{
    darkmodeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
}

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
})

ScrollReveal().reveal(".home-content,.heading",{origin:'top'});

ScrollReveal().reveal('.home-img img,.services-container,.portfolio-box,.testimonial-wrapper,.content-form',{origin:'bottom'})

ScrollReveal().reveal('.home-content h1,.about-img img',{origin:'left'})

ScrollReveal().reveal('.home-content h3,.home-content p,.about-content',{origin:'right'});
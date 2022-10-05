// Navbar JavaScript
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}


// Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance:'85px',
    duration:2000,
    reset: true
})

sr.reveal ('.home-text',{})
sr.reveal ('.home-img',{delay:200})
sr.reveal ('.social',{delay:200})

sr.reveal ('.about-img',{})
sr.reveal ('.heading',{})
sr.reveal ('.about-text',{delay:200})

sr.reveal ('.services-content',{})

sr.reveal ('.work-text',{})
sr.reveal ('.work-img',{delay:200})

sr.reveal ('form input',{})
sr.reveal ('form textarea',{})
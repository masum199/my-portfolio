// =================== toggle icon navbar ================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// =================== scroll section active link ================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        } 
    })
    // =================== sticky navbar ================

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    // =================== remove toggle icon and navbar when click navbar (links) ================
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


// =================== scroll reveal ==================
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'MERN STACK DEVELOPER'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// send email
// Communication
let communicationNumber = document.getElementById('communication-number');
let communicationCircle = document.getElementById('communication-circle');
let communicationCounter = 0;
setInterval(() => {
    if (communicationCounter === 90) {
        clearInterval();
    } else {
        communicationCounter += 1;
        communicationNumber.innerHTML = communicationCounter + "%";
       
    }
}, 50);

// Team Work
let teamworkNumber = document.getElementById('teamwork-number');
let teamworkCircle = document.getElementById('teamwork-circle');
let teamworkCounter = 0;
setInterval(() => {
    if (teamworkCounter === 80) {
        clearInterval();
    } else {
        teamworkCounter += 1;
        teamworkNumber.innerHTML = teamworkCounter + "%";
       
    }
}, 50);

// Project Management
let projectNumber = document.getElementById('project-number');
let projectCircle = document.getElementById('project-circle');
let projectCounter = 0;
setInterval(() => {
    if (projectCounter === 75) {
        clearInterval();
    } else {
        projectCounter += 1;
        projectNumber.innerHTML = projectCounter + "%";
    
    }
}, 50);

// Creativity
let creativityNumber = document.getElementById('creativity-number');
let creativityCircle = document.getElementById('creativity-circle');
let creativityCounter = 0;
setInterval(() => {
    if (creativityCounter === 70) {
        clearInterval();
    } else {
        creativityCounter += 1;
        creativityNumber.innerHTML = creativityCounter + "%";
      
    }
}, 50);
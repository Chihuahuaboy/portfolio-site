document.querySelectorAll('nav a').forEach(link => {
    
    link.addEventListener('click', function (e) {


        const href = this.getAttribute('href');

        if (href.includes('.html')) return;

        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);


        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    });
    
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (e){
    e.preventDefault();

    const name = document.getElementById('name').ariaValueMax.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    contactForm.reset();

});

const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
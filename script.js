// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link (except dropdown toggles)
const mobileLinks = document.querySelectorAll('.mobile-nav-links a:not(.mobile-dropdown-toggle)');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate Servicii Section on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe servicii title and description
const serviciiTitle = document.querySelector('.servicii-title');
const serviciiDescription = document.querySelector('.servicii-description');

if (serviciiTitle) {
    observer.observe(serviciiTitle);
}
if (serviciiDescription) {
    observer.observe(serviciiDescription);
}

// Observe servicii items
const serviciiItems = document.querySelectorAll('.servicii-item');
serviciiItems.forEach(item => {
    observer.observe(item);
});

// Mobile Dropdown Toggle
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('active');
    });
});

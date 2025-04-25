// DOM Elements
const header = document.querySelector('header');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a');
const contactForm = document.getElementById('contactForm');

// Header style on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('shadow-lg');
        header.classList.add('bg-firebase-surface');
        header.classList.remove('navbar-glassmorphism');
    } else {
        header.classList.remove('shadow-lg');
        header.classList.remove('bg-firebase-surface');
        header.classList.add('navbar-glassmorphism');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', function() {
    // Toggle hamburger menu animation
    const spans = hamburger.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[0].classList.toggle('translate-y-1.5');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
    spans[2].classList.toggle('-translate-y-1.5');
    
    // Toggle mobile menu
    if (mobileMenu.classList.contains('-translate-x-full')) {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.add('translate-x-0');
    } else {
        mobileMenu.classList.add('-translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('-translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        
        // Reset hamburger icon
        const spans = hamburger.querySelectorAll('span');
        spans[0].classList.remove('rotate-45', 'translate-y-1.5');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-1.5');
    });
});

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Display form submission message
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Firebase-style animation on scroll with Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target elements to animate
const animateElements = document.querySelectorAll('.firebase-card, h2, h3, .dot-pattern, .skills-container, .floating');

// Add initial styles and observe elements
animateElements.forEach(element => {
    element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
    observer.observe(element);
});

// Add utility class for animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Firebase-style progress bar animation */
        @keyframes progressBarAnimation {
            from { width: 0; }
        }
        
        .animated-progress-bar {
            animation: progressBarAnimation 1.5s ease-out forwards;
        }
    </style>
`);

// Animate progress bars when they come into view
const progressBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.bg-firebase-blue');
            progressBars.forEach(bar => {
                bar.classList.add('animated-progress-bar');
            });
            progressBarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe progress bar containers
document.querySelectorAll('.bg-firebase-dark').forEach(container => {
    progressBarObserver.observe(container);
});

// Counter animation for stats
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 16ms is roughly 60fps
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countElement = entry.target;
            const target = parseInt(countElement.textContent);
            if (!countElement.classList.contains('counted')) {
                countElement.classList.add('counted');
                animateCounter(countElement, target, 1500);
            }
            counterObserver.unobserve(countElement);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('.text-2xl.font-bold.text-firebase-blue').forEach(counter => {
    counterObserver.observe(counter);
});

// Display the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Initialize on page load
window.addEventListener('load', function() {
    // Trigger scroll once to initialize animations that are already in view
    window.dispatchEvent(new Event('scroll'));
}); 
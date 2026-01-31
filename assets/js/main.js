// 1. Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Link එකක් click කළ විට menu එක ඉබේම වැසීමට
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// 2. Navbar Scroll Effect
window.onscroll = function() {
    let nav = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

// 3. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.anim-reveal').forEach(el => observer.observe(el));

// 4. WhatsApp Order
function orderWA(productName) {
    const myNumber = "94728909227";
    const text = `Hi VANGUARD! I'm interested in pre-ordering: [ ${productName} ].`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`, '_blank');
}
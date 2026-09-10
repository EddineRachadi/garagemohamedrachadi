// Garage Mohamed Rachadi — interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Topbar hides on scroll down, reappears on scroll up
const topbar = document.getElementById('topbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 80 && currentScrollY > lastScrollY) {
    topbar.classList.add('is-hidden');
  } else {
    topbar.classList.remove('is-hidden');
  }
  lastScrollY = currentScrollY;
}, { passive: true });

// Hero slideshow
const heroSlides = document.querySelectorAll('#hero-slides .hero-slide');
if (heroSlides.length > 1) {
  let activeSlide = 0;
  setInterval(() => {
    heroSlides[activeSlide].classList.remove('is-active');
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroSlides[activeSlide].classList.add('is-active');
  }, 6000);
}

// Active nav link highlighting
const navLinks = document.querySelectorAll('[data-nav]');
const sections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = `#${entry.target.id}`;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(section => sectionObserver.observe(section));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

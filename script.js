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

// Hero slideshow — cycles background image, title and mini description per service
const heroServices = [
  { title: 'Redressage de <span class="text-accent">carrosserie</span>', sub: "Remise en forme des tôles déformées après un choc, sans altérer la structure du véhicule." },
  { title: 'Masticage et <span class="text-accent">préparation des surfaces</span>', sub: "Un ponçage et un mastiquage soignés pour une surface parfaitement lisse avant peinture." },
  { title: 'Peinture <span class="text-accent">complète et partielle</span>', sub: "Application d'une peinture teintée à l'identique, sur une pièce ou sur l'ensemble de la carrosserie." },
  { title: 'Rénovation après <span class="text-accent">accident ou rayures</span>', sub: "Réparation des dommages visibles pour retrouver une carrosserie nette et uniforme." },
  { title: 'Polissage et <span class="text-accent">finitions esthétiques</span>', sub: "Un travail de finition qui redonne de l'éclat à la peinture et aux surfaces traitées." },
  { title: 'Réparation des <span class="text-accent">pare-chocs</span>', sub: "Remise en état ou remplacement des éléments endommagés de la carrosserie." },
  { title: 'Remise en état <span class="text-accent">avant vente</span>', sub: "Un véhicule présenté sous son meilleur jour, prêt pour une inspection ou une vente." }
];

const heroSlides = document.querySelectorAll('#hero-slides .hero-slide');
const heroTitle = document.getElementById('hero-title');
const heroSub = document.getElementById('hero-sub');
const heroDots = document.querySelectorAll('#hero-dots .hero-dot');
let heroIndex = 0;
let heroTimer = null;

function showHeroSlide(nextIndex) {
  if (nextIndex === heroIndex) return;

  heroSlides[heroIndex].classList.remove('is-active');
  heroSlides[nextIndex].classList.add('is-active');
  heroDots[heroIndex].classList.remove('is-active');
  heroDots[nextIndex].classList.add('is-active');

  heroTitle.classList.add('hero-text-out');
  heroSub.classList.add('hero-text-out');

  setTimeout(() => {
    const service = heroServices[nextIndex];
    heroTitle.innerHTML = service.title;
    heroSub.textContent = service.sub;
    heroTitle.classList.remove('hero-text-out');
    heroSub.classList.remove('hero-text-out');
  }, 350);

  heroIndex = nextIndex;
}

function startHeroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    showHeroSlide((heroIndex + 1) % heroSlides.length);
  }, 6000);
}

if (heroSlides.length > 1 && heroTitle && heroSub) {
  heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
      showHeroSlide(Number(dot.dataset.slide));
      startHeroAutoplay();
    });
  });
  startHeroAutoplay();
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

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Gentle pointer tilt on larger screens only; mobile users keep a lightweight animation.
const orb = document.querySelector('.orb');
const heroArt = document.querySelector('.hero-art');
if (orb && heroArt && window.matchMedia('(pointer: fine)').matches) {
  heroArt.addEventListener('pointermove', (event) => {
    const rect = heroArt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    orb.style.transform = `translateY(-4px) rotateY(${x * 18}deg) rotateX(${-y * 12}deg)`;
  });
  heroArt.addEventListener('pointerleave', () => {
    orb.style.transform = '';
  });
}

// =========================================================
// Menú de navegación móvil
// =========================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Cierra el menú al elegir una sección (mejor experiencia en mobile)
navMenu.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// Efecto de tipeo en la terminal del hero
// Simula el resultado de la consulta SQL de presentación.
// Respeta prefers-reduced-motion: si está activado, muestra
// el texto completo de inmediato sin animación.
// =========================================================
const typedLine = document.getElementById('typedLine');
const caret = document.getElementById('caret');
const outputText = '→ Desarrollador/a Backend Junior · Córdoba, Argentina';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeText(text, el, speed = 28) {
  let i = 0;
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(caret);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

if (prefersReducedMotion) {
  typedLine.textContent = outputText;
} else {
  // Pequeña pausa antes de empezar a tipear, como si la consulta corriera
  setTimeout(() => typeText(outputText, typedLine), 500);
}

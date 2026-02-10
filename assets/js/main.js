/* ============================================================
   main.js — shared scripts for dinuka-kasun-medis.github.io
   ============================================================ */

// Subtle radial glow that follows the mouse
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth)  * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.backgroundImage =
    `radial-gradient(ellipse 600px 400px at ${x}% ${y}%, rgba(57,255,132,.03) 0%, transparent 70%)`;
});

// Trigger window fade-in animations on scroll into view
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) e.target.style.animationPlayState = 'running';
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.window').forEach(w => observer.observe(w));

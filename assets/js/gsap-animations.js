// Minimal, one-time hero animation without loops. Falls back gracefully if GSAP is unavailable.
document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  const animated = hero.querySelectorAll('[data-animation]');

  // Ensure visible by default
  animated.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  // One-time entrance if GSAP is available
  if (typeof window.gsap !== 'undefined') {
    window.gsap.from(animated, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }

  // Simple, one-pass typewriter effect
  const tw = hero.querySelector('.typewriter');
  if (tw) {
    const text = tw.textContent || '';
    tw.textContent = '';
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      tw.textContent = text.slice(0, i);
      if (i >= text.length) clearInterval(id);
    }, 40);
  }
});

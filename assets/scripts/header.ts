let mobileMenuOpen = false;
const mobileMenuBtn = document.querySelector('button#mobile-menu-toggle');
const mobileMenu = document.querySelector('section#mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  const openBtn = mobileMenuBtn?.querySelector('div#open');
  const closeBtn = mobileMenuBtn?.querySelector('div#close');

  mobileMenu?.setAttribute('data-active', !mobileMenuOpen);
  mobileMenu?.setAttribute('aria-hidden', mobileMenuOpen);
  openBtn?.setAttribute('data-active', mobileMenuOpen);
  closeBtn?.setAttribute('data-active', !mobileMenuOpen);

  mobileMenuOpen = !mobileMenuOpen;
});

let mobileMenuOpen = false;
let subMenuOpen = false;

const mobileMenuBtn = document.querySelector('button#mobile-menu-toggle');
const mobileMenu = document.querySelector('section#mobile-menu');
const subMenuBtns = document.querySelectorAll('button#solutions-parent');
const subMenus = document.querySelectorAll('ul#solutions-sub');

mobileMenuBtn.addEventListener('click', () => {
  const openBtn = mobileMenuBtn?.querySelector('div#open');
  const closeBtn = mobileMenuBtn?.querySelector('div#close');

  mobileMenu?.setAttribute('data-active', !mobileMenuOpen);
  mobileMenu?.setAttribute('aria-hidden', mobileMenuOpen);
  openBtn?.setAttribute('data-active', mobileMenuOpen);
  closeBtn?.setAttribute('data-active', !mobileMenuOpen);

  mobileMenuOpen = !mobileMenuOpen;
});

subMenuBtns.forEach((subMenuBtn) => {
  subMenuBtn.addEventListener('click', () => {
    subMenuBtn?.setAttribute('data-active', !subMenuOpen);

    subMenus.forEach(subMenu => {
      subMenu?.setAttribute('data-active', !subMenuOpen);
      subMenu?.setAttribute('aria-hidden', subMenuOpen);
    });

    subMenuOpen = !subMenuOpen;
  });
});

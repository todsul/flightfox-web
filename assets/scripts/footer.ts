const footerSectionBtns = document.querySelectorAll(
  '[data-type="footer-section"]'
);

footerSectionBtns.forEach((sectionBtn) => {
  let sectionFlag = false;
  const sectionLabel = sectionBtn.querySelector('[data-type="section-label"]');
  const sectionList = sectionBtn.querySelector('ul');
  
  sectionBtn.addEventListener('click', () => {
    sectionLabel?.setAttribute('data-active', !sectionFlag);
    sectionList?.setAttribute('data-active', !sectionFlag);

    sectionFlag = !sectionFlag;
  });
});

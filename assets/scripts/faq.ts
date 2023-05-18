const faqToggles = document.querySelectorAll<HTMLButtonElement>(
  'button.faq-question'
);

faqToggles.forEach(toggle => {
  toggle.addEventListener('click', evt => {
    const parent = toggle.parentElement as HTMLLIElement;
    const faqIconWrap = toggle.querySelector<HTMLDivElement>('div.icon-wrap');
    const faqAnswer = parent.querySelector<HTMLParagraphElement>('p.faq-answer');
    const isExpanded = faqAnswer?.getAttribute('data-active') === 'true';

    faqIconWrap?.setAttribute('data-active', String(!isExpanded));
    faqAnswer?.setAttribute('data-active', String(!isExpanded));
  });
});

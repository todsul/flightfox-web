const filterDropdown =
  document.querySelector<HTMLUListElement>('ul#filter-dropdown');
const mobileFilters = document.querySelectorAll<HTMLButtonElement>(
  'ul#filter-dropdown button'
);
const filters =
  document.querySelectorAll<HTMLButtonElement>('button.tag-filter');
const cards = document.querySelectorAll<HTMLLIElement>('ul#article-cards li');

filterDropdown.addEventListener('click', () => {
  const attr = filterDropdown.getAttribute('data-active');
  const state = attr === 'true';
  const activeTag = document.querySelector<HTMLLIElement>('li#active-tag');

  activeTag.setAttribute('data-active', 'false');
  filterDropdown.setAttribute('data-active', !state);
});

const setFilters = (el: HTMLButtonElement, inlined: boolean) => {
  const tag = el.getAttribute('data-tag');

  if (inlined) {
    const activeTag = document.querySelector<HTMLLIElement>('li#active-tag');

    filterDropdown.setAttribute('data-active', 'false');
    activeTag.setAttribute('data-active', 'true');
    activeTag.innerHTML = el.innerHTML;
  } else {
    filters.forEach(filter => {
      if (filter === el) return;

      filter.setAttribute('data-active', 'false');
    });

    el.setAttribute('data-active', 'true');
  }

  cards.forEach(card => {
    const cardTag = card.getAttribute('data-tag');

    switch (true) {
      case tag === 'all':
        card.setAttribute('data-active', 'true');
        return;
      case cardTag.includes(tag):
        card.setAttribute('data-active', 'true');
        return;
      default:
        card.setAttribute('data-active', 'false');
        return;
    }
  });
};

filters.forEach(filter => {
  filter.addEventListener('click', () => setFilters(filter, false));
});

mobileFilters.forEach(filter => {
  filter.addEventListener('click', evt => {
    evt.stopPropagation();
    setFilters(filter, true);
  });
});

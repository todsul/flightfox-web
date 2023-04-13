const filters = document.querySelectorAll<HTMLButtonElement>('button.tag-filter');
const cards = document.querySelectorAll<HTMLLIElement>('ul#article-cards li');

const setFilters = (el: HTMLButtonElement) => {
  const tag = el.getAttribute('data-tag');

  filters.forEach(filter => {
    if (filter === el) return;

    filter.setAttribute('data-active', 'false');
  });

  el.setAttribute('data-active', 'true');

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
  filter.addEventListener('click', () => setFilters(filter));
});

const anchors = document.querySelectorAll('#TableOfContents li');
const { hash } = new URL(window.location.href);

anchors.forEach(anchor => {
  anchors.forEach(el => {
    const href = el.querySelector('a').getAttribute('href');

    if (href === hash) {
      el.setAttribute('data-active', 'true');
    }
  });

  anchor.addEventListener('click', event => {
    anchors.forEach(el => {
      el.setAttribute('data-active', 'false');
    });

    anchor.setAttribute('data-active', 'true');
  });
});

const tocToggle = document.querySelector<HTMLButtonElement>('button#toc-toggle');
const anchors = document.querySelectorAll<HTMLUListElement>('#TableOfContents li');
const mobileWrap = document.querySelector<HTMLDivElement>('div#toc-wrap-mobile');
const nav = mobileWrap.querySelector('nav#TableOfContents');
const { hash } = new URL(window.location.href);
let toggleState = false;

if (nav) {
  const ul = nav.querySelector('ul');
  const li = ul?.querySelectorAll('li');

  mobileWrap?.setAttribute('data-count', li?.length);
  mobileWrap?.style.setProperty('--count', li?.length.toString());
}

tocToggle?.addEventListener('click', () => {
  mobileWrap?.setAttribute('data-active', !toggleState);
  tocToggle?.setAttribute('data-active', !toggleState);
  nav?.setAttribute('data-active', !toggleState);

  toggleState = !toggleState;
});
console.info(anchors);
anchors.forEach(anchor => {
  anchors.forEach(el => {
    const href = el.querySelector('a').getAttribute('href');

    if (href === hash) {
      el.setAttribute('data-active', 'true');
    }
  });

  anchor.addEventListener('click', event => {
    event.stopPropagation();
    anchors.forEach(el => {
      el.setAttribute('data-active', 'false');
    });

    anchor.setAttribute('data-active', 'true');
  });
});

const clipAnchors = document.querySelectorAll<HTMLAnchorElement>(
  'a[data-clip="true"]'
);

clipAnchors.forEach(clipAnchor => {
  if (clipAnchor) {
    clipAnchor.addEventListener('click', async event => {
      event.preventDefault();

      const clipInput = clipAnchor.href;

      if (clipInput) {
        try {
          await navigator.clipboard.writeText(clipInput);

          clipAnchor.setAttribute('data-copied', 'true');
        } catch (err) {
          console.error('Failed to copy: ', err);
        } finally {
          setTimeout(() => {
            clipAnchor.setAttribute('data-copied', 'false');
          }, 3000);
        }
      }
    });
  }
});

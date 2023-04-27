import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 3,
  gap: 32,
}).mount({ Controls });

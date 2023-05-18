import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide-1').mount({ Controls });
new Glide('.glide-2', {
  type: 'slider',
  startAt: 0,
  perView: 3,
  gap: 32,
  breakpoints: {
    768: {
      perView: 1,
    },
  },
}).mount({ Controls });

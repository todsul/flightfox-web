import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide-1').mount({ Controls });
new Glide('.glide-2', { gap: 32 }).mount({ Controls });

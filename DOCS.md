# Documentation

## Getting Started
Before compiling the site, install all necessry dependencies. Node v16.19.1 is utilized for best compatibility, as declared on the `.nvmrc` config. [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) can be utilized to install the correct Node version. However, any version above 16 can be utilize without any issues.
```sh
npm install
```

Production build:
```sh
npm run build:prod
```

Local server:
```sh
npm run start
```

A custom Docker image and Compose file are also avialble to run either of these environments.

## Data
All subpages carry their own copy and data. Meaning, everything you see on a page is taken from the markdown file's own frontmatter. If the content is utilize thorughout the site, the data will be located in the `./data/` directory.

> **Note:** To ensure easy of use and to leverage Hugo's templeting engine, almost all page content is found in the frontmatter. Blog and Case Studies, however, do contain some markdown content.

## Content
Every page is rendered from a Markdown file located somewhere in the `./content/` directory. The routing for the site is determined by the directory structure. For example:
```sh
./content/blog/_index.md --> flighthacker.com/blog/

./content/careers/dental-assistant/a-guide-to-british-airways-on-business.md --> flighthacker.com/blog/a-guide-to-british-airways-on-business/
```

> **Note:** Files named `index.md` or `_index.md` will render as the homepage for the parent folder, as seen in the first above example. The difference between the two files is that the file prefixed with `_` will act as a List Template (Section). While the route will be the same regardless, Hugo will use completely different templates to render the page. So make sure this is intentional and reserve the use of `_index.md` for folders containing other pages _only_.

## Images
[Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) are leveraged to take advantage of Hugo's internal [image processing](https://gohugo.io/content-management/image-processing/). The largest file possible is recommended in a PNG format to allow Hugo to compress the image and generate the necessary files for progressive enhancement. `<picture>` is used to load the smallest format possible. Modern lazyloading is also used via the `<img>` `loading` attribute.

All images are located in the `./assets/img/` directory. The folder structure matches that of the `./content/` directory. While site-wide images and icons are located at the base of the `/img/` directory.

SVGs are used as well for icons. These follow the same folder structure.

## Slideshows
Slideshows are done with the help of [Glide.js](https://glidejs.com/docs/). A base TypeScript file is located on the `./assets/scripts/` directory named `glide.ts`. This script imports the library and bundles it at build time.

Configuration for the Glide instance is done at the Template level using [Base Templates](https://gohugo.io/templates/base/). There are 2 default templates for [Single](https://gohugo.io/templates/single-page-templates/) and [List](https://gohugo.io/templates/lists/) (Sections) located in the `./layouts/_default/` directory. The List template is for `_index.md` files located inside nested folders in the content directory. While Single Template handles every other page.

> **Note:** The homepage does not utilize either of these templates. Instead, it's content is rendered via the `./layouts/index.html` file.

At the foot of these templates, you'll find a `{{ define "scripts" }}` block. This is where scripts are declared. Inside that block, wrapped around a `<script>`, you can declare the Glide configuration.

A base config is already declared there for both the Testimonials and features Case Studies slideshows.

Enabled either (or both) of these slideshows can be done via a frontmatter param:
```md
glide: true
glideCards: true
```

## Styling
All stylesheets are located in the `./assets/css/` directory. A `critical.css` file contains all styles rendered critically in the HTML head. This stylesheet also contains the color scheme via CSS Custom Properties. The majority of styling and layout is done via [Tailwind](https://tailwindcss.com/docs/). The configuration file contains a few custom styles, as well as all the color scheme declarations. You can find it at the base of the repo.

All other custom declarations are located in the `main.scss` stylesheet.

Page specific stylesheets can all be declared via the `{{ define "styles" }}` block.

All stylesheets are processed via [PostCSS](https://gohugo.io/hugo-pipes/postcss/) (config found at the base of the repo). [Hugo Pipes](https://gohugo.io/hugo-pipes/transform-to-css/) handles SCSS to CSS transpiling.

## Scripts
All scripts are written in TypeScript and transpiled to JavaScript via Hugo Pipes with the help of [Babel](https://gohugo.io/hugo-pipes/babel/). These are loated in the `./assets/scripts/` directory. Just like the Glide.js script, these can be declared on a per page basis via the `{{ define "scripts" }}` block at the foot of the Single and List templates.

Site-wide scripts can be found at foot of the `./layouts/index.html` template where they are [bundled](https://gohugo.io/hugo-pipes/js/) together.

## Fonts
All font files are loaded locally with the help of the `@font-face` declaration. These files are located on the `./static/fonts` directory. They are split into two versions:
- Subset version covering only US ASCII characterset
- Full version covering all LATIN characterset

This is done with the help of [glyphhanger](https://github.com/zachleat/glyphhanger). The subset files (suffixed with a `-sub` on the filename) are preloaded and rendered initially. Once the document is loaded, the full version is loaded with the help of the `new FontFace` constructor via a script located in the HTML head.

This process ensures the best performance and prevents Flash Of Unstyled Text.

## Caching
All assets are cached via a Service Worker at inital load. They will be loaded from local storage from that point forward, reducing load times.

The site is also available offline once the worker is installed.

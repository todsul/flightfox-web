const pallete = {
  background: 'var(--background)',
  'background-light': 'var(--background-light)',
  'background-dark': 'var(--background-dark)',
  foreground: 'var(--foreground)',
  footer: 'var(--footer)',
  meta: 'var(--meta)',
  primary: 'var(--primary)',
  'primary-transparent': 'var(--primary-transparent)',
  selection: 'var(--selection)',
};

const widths = {
  main: 'var(--main-width)',
  'legal-width': 'var(--legal-width)',
  xxs: '18rem',
  xxxs: '14rem',
  xxxxs: '10rem',
};

const templateGrid = size =>
  Array(10)
    .fill(1)
    .map((x, y) => {
      const col = x + y;
      return {
        [`${col}-${size}`]: `repeat(${col}, ${size})`,
      };
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      borderColor: pallete,
      borderWidth: { under: '3.55px' },
      colors: pallete,
      fill: pallete,
      gridTemplateColumns: {
        ...templateGrid('auto'),
        ...templateGrid('min-content'),
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        ...templateGrid('auto'),
        ...templateGrid('min-content'),
      },
      maxHeight: {
        100: '25rem',
        120: '50rem',
        130: '75rem',
        140: '100rem',
      },
      maxWidth: widths,
      minWidth: widths,
      screens: {
        xxxs: '320px',
        xxs: '375px',
        xs: '420px',
      },
      stroke: pallete,
    },
    fontFamily: {
      manrope: ['Manrope', 'serif'],
    },
    zIndex: {
      hidden: -1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
  },
};

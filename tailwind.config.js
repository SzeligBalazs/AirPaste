module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./assets/Backround.png')",
      },
    },
    screens: {
      'mobile': '750px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'monitor': '1280px',
      // => @media (min-width: 1280px) { ... }

      'ultrawide': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

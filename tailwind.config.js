/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      tiny: ['1rem'],
      xsmall: ['1.125rem'],
      small: ['1.25rem'],
      intermedium: ['1.5rem'],
      medium: ['1.875rem'],
      mediumlarge: ['2.25rem'],
      large: ['3.75rem'],
    },
    fontWeight: {
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    textColor: {
      primary: '#0A1128',
      white: '#fff',
    },
  },
};

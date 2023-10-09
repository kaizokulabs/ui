/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Roboto Condensed',
      body: 'Roboto',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      'text': {
        DEFAULT: '#f2ddc0',
        50: '#fbf4ea',
        100: '#f6e8d5',
        200: '#eed2aa',
        300: '#e5bb80',
        400: '#dca456',
        500: '#d48e2b',
        600: '#a97123',
        700: '#7f551a',
        800: '#553911',
        900: '#2a1c09',
      },
      'background': {
        DEFAULT: '#232040',
        50: '#efeef6',
        100: '#dfddee',
        200: '#bfbbdd',
        300: '#9e99cc',
        400: '#7e77bb',
        500: '#5e55aa',
        600: '#4b4488',
        700: '#383366',
        800: '#262244',
        900: '#131122',
      },
      'primary': {
        DEFAULT: '#7dbfb3',
        50: '#eef7f5',
        100: '#ddeeeb',
        200: '#bbddd7',
        300: '#98cdc3',
        400: '#76bcaf',
        500: '#54ab9b',
        600: '#43897c',
        700: '#32675d',
        800: '#22443e',
        900: '#11221f',
      },
      'secondary': {
        DEFAULT: '#f28378',
        50: '#fdeae8',
        100: '#fad4d1',
        200: '#f6a9a2',
        300: '#f17e74',
        400: '#ed5345',
        500: '#e82817',
        600: '#ba2012',
        700: '#8b180e',
        800: '#5d1009',
        900: '#2e0805',
      },
      'accent': {
        DEFAULT: '#f28297',
        50: '#fde8ec',
        100: '#fad1d8',
        200: '#f5a3b2',
        300: '#f0758b',
        400: '#ec4665',
        500: '#e7183e',
        600: '#b91332',
        700: '#8a0f25',
        800: '#5c0a19',
        900: '#2e050c',
      },
    },
  },
  plugins: [],
}

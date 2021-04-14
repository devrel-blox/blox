// https://tailwind.ink/ primary 6066FA
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        '120': '30rem',
      }),
      colors: {
        palette: {
          lighter: '#E8F3FC',
          light: '#ACC3FB',
          primary: '#6066FA',
          dark: '#212590',
        },
        royalblue: {
          '50': '#f5f9fd',
          '100': '#e8f3fc',
          '200': '#cbdefb',
          '300': '#acc3fb',
          '400': '#8397fa',
          '500': '#6066fa',
          '600': '#3f47f6',
          '700': '#3338e3',
          '800': '#292db7',
          '900': '#212590',
        },
        flamingo: {
          '50': '#f5f6fb',
          '100': '#edebfb',
          '200': '#dbd0f9',
          '300': '#c9b1f8',
          '400': '#b684f8',
          '500': '#a157f8',
          '600': '#8539f3',
          '700': '#662de0',
          '800': '#4f26b6',
          '900': '#3f2191',
        },
        orchid: {
          '50': '#faf7f9',
          '100': '#faecf7',
          '200': '#f5cef2',
          '300': '#f1a8eb',
          '400': '#f174e1',
          '500': '#f148d6',
          '600': '#e32cbe',
          '700': '#ba2399',
          '800': '#8c1d70',
          '900': '#6d1955',
        },
        maroon: {
          '50': '#fcf9f8',
          '100': '#fceff1',
          '200': '#fad3e2',
          '300': '#faacc8',
          '400': '#fa759c',
          '500': '#fb4a70',
          '600': '#f42c4d',
          '700': '#d82240',
          '800': '#ab1c35',
          '900': '#87182b',
        },
        mango: {
          '50': '#fbf7f1',
          '100': '#fbefe0',
          '200': '#f9debc',
          '300': '#f6c284',
          '400': '#f59743',
          '500': '#f46d20',
          '600': '#e84a15',
          '700': '#c63718',
          '800': '#9d2c1c',
          '900': '#7d241b',
        },
        carrot: {
          '50': '#faf7ec',
          '100': '#faf1cf',
          '200': '#f7e697',
          '300': '#f2d152',
          '400': '#ebb01d',
          '500': '#e58d0b',
          '600': '#d26807',
          '700': '#ad4e0b',
          '800': '#893c11',
          '900': '#6e3112',
        },
        olive: {
          '50': '#fafaf3',
          '100': '#f9f8da',
          '200': '#f3f09c',
          '300': '#e9e154',
          '400': '#d2c61c',
          '500': '#b4a709',
          '600': '#8d8405',
          '700': '#6a6408',
          '800': '#504b0c',
          '900': '#3d3b0e',
        },
        green: {
          '50': '#f9faf6',
          '100': '#f5f9e7',
          '200': '#e8f2bd',
          '300': '#d3e584',
          '400': '#9fcc3f',
          '500': '#67af1a',
          '600': '#488d0f',
          '700': '#3c6e12',
          '800': '#305216',
          '900': '#274016',
        },
        pacific: {
          '50': '#f0f9fa',
          '100': '#dbf7f7',
          '200': '#b0eeee',
          '300': '#79e1e6',
          '400': '#33c9d8',
          '500': '#13aac6',
          '600': '#0f8aac',
          '700': '#146e8a',
          '800': '#165567',
          '900': '#144552',
        },
        denim: {
          '50': '#f3fafc',
          '100': '#e0f7fb',
          '200': '#b7ebf7',
          '300': '#86daf5',
          '400': '#45b9f2',
          '500': '#1d92ee',
          '600': '#156fe1',
          '700': '#1757bf',
          '800': '#16438d',
          '900': '#13366c',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
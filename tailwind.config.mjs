export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  variants: {
    extend: {
      fontSize: ['rfs'],
      lineHeight: ['rfs'],
      padding: ['rfs'],
      margin: ['rfs'],
      gap: ['rfs'],
    },
  },
  theme: {
    transitionDuration: {
      DEFAULT: '1000ms'
    },
    fontFamily: {
      sans: [
        '"PPMori", sans-serif'
      ],
    },
    screens: {
      'sm': '520px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1220px',
      '2xl': '1440px',
    },
    container: {
      screens: {
        sm: '480px',
        md: '728px',
        lg: '984px',
        xl: '1180px',
        // '2xl': '1400px',
      },
    },
    fontSize: {
      mb: '0.688rem',
      sm: '0.8rem',
      md: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.75rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        PPMori: ["PPMori", "Arial", "sans-serif"],
        PPPangram: ["PPPangram", "Arial", "sans-serif"],
        iconmoon: ['icomoon', 'sans-serif']
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '60': '15rem',
      },
      colors: {
        'blue': {
          100: '#F6FAFD',
          200: '#CCDBFF',
          400: '#CCDDFF',
          500: '#2463EB',
        },
        'grey': {
          100: '#FFF',
          200: '#FAFAFA',
          300: '#F4F4F4',
          400: '#EFF0F2',
          500: '#E6EAED',
          800: '#454545',
          900: '#060606',
        },
        'dark-violet': '#9747FF',
        'light-violet': '#F5EDFF',
        'green-bg': '#79EB21',
        'grey-bg': '#F8F8F8',
        'sand-bg': '#FEF3DC',
        'blue-bg': '#CCDDFF',
        'light-blue-bg': '#EFF4FE',
        'lighter-blue-bg': '#E7F0F7',
        'light-grey-bg': '#EEEEEE',
        'beige': '#FEF3DC',
        'pink': '#F5EDFF',
      },
    },

  },
  plugins: [
    require('tailwindcss-rfs'),
    require('tailwindcss-animated'),
  ],
};

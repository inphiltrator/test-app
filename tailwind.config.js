/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Southwest Desert Color Palette
        desert: {
          50: '#fef9f3',
          100: '#fef2e7',
          200: '#fce2c4',
          300: '#f9cc95',
          400: '#f4b267',
          500: '#ef9543',
          600: '#e17d2f',
          700: '#c66329',
          800: '#9d4f28',
          900: '#7f4325',
          950: '#442114'
        },
        canyon: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fadbc0',
          300: '#f6c195',
          400: '#f19e68',
          500: '#ec7e44',
          600: '#de6530',
          700: '#b84e26',
          800: '#934027',
          900: '#763524',
          950: '#401911'
        },
        sage: {
          50: '#f4f7f4',
          100: '#e7efe7',
          200: '#d0ded0',
          300: '#adc5ad',
          400: '#82a582',
          500: '#638663',
          600: '#4e6b4e',
          700: '#3f553f',
          800: '#344534',
          900: '#2c3a2c',
          950: '#171f17'
        },
        terracotta: {
          50: '#fef5f2',
          100: '#fde9e2',
          200: '#fbd6ca',
          300: '#f7b8a5',
          400: '#f1917a',
          500: '#e86a4e',
          600: '#d44d2f',
          700: '#b23e23',
          800: '#933521',
          900: '#7a3221',
          950: '#42170e'
        }
      },
      backgroundImage: {
        'southwest-gradient': 'linear-gradient(135deg, #fef9f3 0%, #fde9e2 25%, #d0ded0 50%, #f7b8a5 75%, #fef2e7 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)'
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'mode-bg-light': '#f2f7f5',
        'mode-headline-light': '#00473e',
        'mode-paragraph-light': '#475d5b',
        'mode-button-bg-light': '#faae2b',
        'mode-button-text-light': '#00473e',
        
        'mode-bg-dark': '#00473e',
        'mode-headline-dark': '#fffffe',
        'mode-sub-heading-dark': '#f2f7f5',
        'mode-card-bg-dark': '#f2f7f5',
        'mode-card-headline-dark': '#00473e',
        'mode-card-paragraph-dark': '#475d5b',
        'mode-button-bg-dark': '#00473e',
        'mode-button-text-dark': '#f2f7f5',

        'mode-form-input': '#f2f7f5',
        'mode-form-placeholder': '#00473e80',
        'mode-form-value': '#00473e',
        'mode-link': '#faae2b',

        'mode-bg-alt': '#ffa8ba',
        
      },
    },
  },
  plugins: [],
}

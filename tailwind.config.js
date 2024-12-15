/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'], // Asegúrate de que las rutas estén bien configuradas
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        redd: '#201E1F',
        black: '#201E1F',
        white: '#ECE2D0',
        celadon: '#619B8A',
        cgr: '#CEBEBE',
        emerald: '#6C7D47',
        pigmentgreen: '#6C7D47',
        blanco:'#FFFFFF',

        // Intensidades de Celadon
        'celadon-50': '#619B8A',
        'celadon-100': '#619B8A',
        'celadon-200': '#619B8A',
        'celadon-300': '#619B8A',
        'celadon-400': '#619B8A',

        // Intensidades de Emerald
        'emerald-100': '#6C7D47',
        'emerald-200': '#6C7D47',
        'emerald-300': '#6C7D47',
        'emerald-400': '#6C7D47',

        // Intensidades de Pigment Green
        'pigmentgreen-100': '#6C7D47',
        'pigmentgreen-200': '#6C7D47',
        'pigmentgreen-300': '#6C7D47',
      },
      backgroundImage: {
        // Degradado de Celadon a Emerald
        'celadon-to-emerald': 'linear-gradient(to right, #619B8A, #6C7D47)',

        // Degradado de Emerald a Pigment Green
        'emerald-to-pigmentgreen': 'linear-gradient(to right, #6C7D47, #6C7D47)',

        // Degradado de Celadon a Pigment Green
        'celadon-to-pigmentgreen': 'linear-gradient(to right, #619B8A, #6C7D47)',

        // Degradado de tres colores
        'three-color-gradient': 'linear-gradient(to right, #619B8A, #6C7D47, #CEBEBE)',
      },
    },
  },
  plugins: [],
};

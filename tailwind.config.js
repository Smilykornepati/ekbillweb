module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
          },
          slate: {
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          }
        },
      },
    },
    plugins: [],
  }
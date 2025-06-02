export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'bounce-slow-keyframe': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-25%)' },
          },
        },
        animation: {
          'bounce-slow': 'bounce-slow-keyframe 3s infinite',
        },
      },
    },
    plugins: [],
  }
  
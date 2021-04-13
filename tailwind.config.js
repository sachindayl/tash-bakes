module.exports = {
  purge: {
    enabled: true,
    layers: ['components', 'utilities'],
    content: [
      './components/**/*.html',
      './layouts/**/*.html',
      './pages/**/*.html',
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
    ]
  },
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}

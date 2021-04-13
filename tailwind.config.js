module.exports = {
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
  purge: {
    mode: 'layers',
    layers: ['components', 'utilities'],
    content: [
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      './components/**/*.html',
      './layouts/**/*.html',
      './pages/**/*.html',
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
    ]
  }
}

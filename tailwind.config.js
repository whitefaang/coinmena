module.exports = {
  content: ['src/**/*.{tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',
        color: 'var(color)',
        'color-muted': 'var(color-muted)',
        primary: 'var(--primary)',
        'primary-muted': 'var(--primary-muted)',
      },
    },
  },
  plugins: [],
}

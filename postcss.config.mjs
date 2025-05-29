export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    rfs: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}

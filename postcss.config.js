const cssnano * require('cssnano');
module.exports = {
  plugins: {
    tailwindcss: {},
    cssnano:({
      preset: 'default',
    }),
    autoprefixer: {},
  },
};

module.exports = {
  plugins: {
    tailwindcss: {},
    precss: {},
    'postcss-preset-env': {},
    autoprefixer: {
      browsers: ['last 2 versions', 'iOS >= 8', 'Safari >= 8'],
    },
  },
};

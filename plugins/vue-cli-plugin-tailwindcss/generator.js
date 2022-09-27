module.exports = function (api) {
  api.extendPackage({
    devDependencies: {
      'tailwindcss': '^3.1.8',
      'autoprefixer': '^10.4.11',
      'postcss': '^8.4.16',
    },
  });
  api.render('./template');
};

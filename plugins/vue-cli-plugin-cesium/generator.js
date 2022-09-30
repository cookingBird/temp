module.exports = function (api) {
  api.extendPackage((pkg) => ({
    devDependencies: {
      cesium: "^1.85.x",
      "node-polyfill-webpack-plugin": "^2.0.x",
    },
  }));
};

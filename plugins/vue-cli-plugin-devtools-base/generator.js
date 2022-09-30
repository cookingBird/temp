module.exports = function (api) {
  api.extendPackage((pkg) => ({
    dependencies: {
      axios: "latest",
      "element-ui": "^2.15.x",
      nprogress: "^0.2.x",
      echarts: "^5.3.x",
    },
  }));
};

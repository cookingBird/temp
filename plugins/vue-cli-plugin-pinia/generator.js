module.exports = function (api) {
  api.extendPackage((pkg) => ({
    dependencies: {
      pinia: "latest",
    },
  }));
  api.render("./template");
};

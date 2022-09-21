const { defineConfig } = require('@vue/cli-service');
//引入nodeJs模块
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const CDN = {
  js: ['cdn/cesium/Cesium.js'],
  css: [],
};
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
  chainWebpack: (config) => {
    if (isProduction) {
      config.plugin('html').tap((args) => {
        args[0].cdn = CDN;
        return args;
      });
      config.externals({
        cesium: /^cesium/i,
      });
    }
  },
});

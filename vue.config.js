const { defineConfig } = require('@vue/cli-service');
//按需引入nodeJs模块
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const CDN = {
  js: ['cdn/cesium/Cesium.js', 'cdn/vue/vue.min.js'],
  css: [],
};
const publicPath = isProduction ? '/main/' : './';
module.exports = defineConfig({
  publicPath,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
  chainWebpack: (config) => {
    if (isProduction) {
      config.plugin('html').tap((args) => {
        args[0].cdn = CDN;
        args[0].publicPath = publicPath;
        return args;
      });
      config.externals({
        cesium: /^cesium/i,
        vue: /^vue/i,
      });
    }
  },
});

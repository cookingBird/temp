const { defineConfig } = require('@vue/cli-service');
const path = require('path');
//按需引入nodeJs模块
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const getFormatDateNow = require('./webpack-plugin/getFormateDataNow');
const ZipPlugin = require('./webpack-plugin/zip-plugin');
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
    plugins: [new NodePolyfillPlugin()].concat(
      isProduction
        ? [
            new ZipPlugin({
              path: path.resolve(__dirname, './packages'),
              filename: 'dist.' + getFormatDateNow('-', '', ''),
            }),
          ]
        : []
    ),
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

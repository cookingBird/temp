const { defineConfig } = require('@vue/cli-service');
//引入nodeJs模块
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
});

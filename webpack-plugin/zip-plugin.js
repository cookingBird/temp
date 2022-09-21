const JSZip = require('jszip');
const path = require('path');
const RawSource = require('webpack-sources').RawSource;
const zip = new JSZip();
const webpack = require('webpack');
const isWebpack4 = webpack.version.startsWith('4.');
const pluginName = 'ZipPlugin';

module.exports = class ZipPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const pluginOptions = this.options;
    const Process = (compilation, callback) => {
      const folder = zip.folder(pluginOptions.filename);
      for (let filename in compilation.assets) {
        const source = compilation.assets[filename].source();
        folder.file(filename, source);
      }
      zip
        .generateAsync({
          type: 'nodebuffer',
        })
        .then((blob) => {
          const outputPath = path.join(
            pluginOptions.path,
            pluginOptions.filename + '.zip'
          );
          const outputRelativePath = path.relative(
            compilation.options.output.path,
            outputPath
          );
          if (isWebpack4) {
            compilation.assets[outputRelativePath] = new RawSource(blob);
          } else {
            compilation.emitAsset(outputRelativePath, new RawSource(blob));
          }
          callback();
        });
    };
    if (isWebpack4) {
      compiler.hooks.emit.tapAsync(pluginName, Process);
    } else {
      compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
        compilation.hooks.processAssets.tapPromise(
          {
            name: pluginName,
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER,
          },
          () => new Promise((resolve) => Process(compilation, resolve))
        );
      });
    }
  }
};

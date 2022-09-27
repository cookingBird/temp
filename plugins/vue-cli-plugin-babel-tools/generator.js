module.exports = function (api) {
  api.extendPackage((pkg) => ({
    devDependencies: {
      '@babel/plugin-proposal-export-default-from': '^7.18.10',
      '@babel/plugin-proposal-export-namespace-from': '^7.18.9',
      '@babel/plugin-proposal-logical-assignment-operators': '^7.18.9',
      '@babel/plugin-proposal-nullish-coalescing-operator': '^7.18.6',
      '@babel/plugin-proposal-optional-chaining': '^7.18.9',
      '@babel/plugin-syntax-import-meta': '^7.10.4',
      'babel-plugin-transform-remove-console': '^6.9.4',
    },
    babel: {
      plugins: [
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-logical-assignment-operators',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
        ['transform-remove-console', { 'exclude': ['error', 'warn'] }],
      ],
    },
  }));
};

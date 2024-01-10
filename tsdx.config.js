const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');
module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    options.plugins = [replace({ preventAssignment: true })];
    return config;
  },
};

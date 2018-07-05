/**
 * Override create-react-app default config 
 */

const rewireLess = require('react-app-rewire-less');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireLess(config, env);
  /**
    * Remove minify plugin for production build
  */
  if (env === 'production') {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin');
  }
  return config;
}
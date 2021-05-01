// crago.config.js
// see: https://github.com/sharegate/craco

const path = require('path');
const fs = require('fs');
const cracoBabelLoader = require('craco-babel-loader');

// Handle relative paths to sibling packages
const appDirectory = fs.realpathSync(process.cwd());
const resolvePackage = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  plugins: [
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [resolvePackage('../ui-kit'), resolvePackage('../core')]
      }
    }
  ]
};

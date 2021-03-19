// Global node imports
const webpackMerge = require("webpack-merge");

// Webpack configuration
const baseConfig = require("./webpack.base");
const devServerConfig = require("./webpack.devserver.config");
const clientConfig = require("./webpack.client");

module.exports = () => {
  const environment = process.env.NODE_ENV;

  console.log(`[webpack.config.js]: environment=${environment}`);

  switch (environment) {
    case "devserver":
      webpackConfig = webpackMerge(baseConfig, devServerConfig);
      break;
    case "client":
      webpackConfig = webpackMerge(baseConfig, clientConfig);
      break;
  }

  console.log("[webpack.config.js]: webpackConfig...");
  console.log(webpackConfig);

  return webpackConfig;
};

// Global Node imports
const htmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development", // "development" || "production"

  devServer: {
    contentBase: "./public"
  },

  // Tell Webpack the root file of the server application
  entry: "./src/client/client.tsx",

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            // eslint-disable-next-line prettier/prettier
            loader: require.resolve("awesome-typescript-loader")
          }
        ]
      }
    ]
  },

  plugins: [
    // Support compilation out to the Webpack Dev Server index file
    new htmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = config;

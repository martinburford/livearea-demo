// Global Node imports
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const terserJSPlugin = require("terser-webpack-plugin");

const config = {
  mode: "production",

  // Tell Webpack the root file of the server application
  entry: {
    client: "./src/client/client.tsx"
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("awesome-typescript-loader")
          }
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new optimizeCSSAssetsPlugin({}),
      new terserJSPlugin({
        extractComments: false
      })
    ],

    // Create a single vendor file with node_modules of the ENTIRE application, in order to serve it as cached, since the file contents will rarely differ between builds
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }

    // Create a single vendor file with specific node_modules across the ENTIRE application
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/](antd|axios|classnames|compression|core-js|express|local-storage|lodash|qs|react-dom-confetti|react-helmet|react-intercom|react-redux|react-remarkable|react-router-dom|react-scroll|react-share|react-spring|redux|redux-thunk|reselect|uuid|react|react-dom)[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   }
    // }
  },

  // Extend the base publicPath: "/" property
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },

  plugins: [
    new miniCssExtractPlugin({
      chunkFilename: "[name].css"
      // filename: "client.css"
    })
  ]
};

module.exports = config;

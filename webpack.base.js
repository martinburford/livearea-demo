// Global Node imports
const bundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const miniCssExtractPlugin = require("mini-css-extract-plugin");

// Should Webpack Bundle Analyzer be used?
const isDebug = process.env.DEBUG;

// CSS styles will either be inline (Webpack Dev Server) or extracted out to an external file (client production build only)
const mode = process.env.NODE_ENV === "devserver" ? "devserver" : "production";

// Which loader for CSS should be being used?
const cssLoaderToUse = mode === "devserver" ? "style-loader" : miniCssExtractPlugin.loader;

const config = {
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          cssLoaderToUse,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          cssLoaderToUse,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },

  // ? @loadable/components NEEDS THIS in order to serve the chunked bundles from the / root (for Webpack Dev Server AND client / production builds)
  output: {
    publicPath: "/"
  },

  plugins: [],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};

// Run Webpack Bundle Analyzer (for debugging bundle sizes)
if (isDebug) {
  config.plugins.push(new bundleAnalyzerPlugin());
}

module.exports = config;

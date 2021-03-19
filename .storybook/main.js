module.exports = {
  // addons: ["@storybook/addon-docs", "@storybook/addon-viewport"],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: false },
    },
    "@storybook/addon-viewport"
  ],

  stories: [
    "../src/client/components/**/*.stories.mdx",
    "../src/client/components/**/*.stories.js"
  ],
  webpackFinal: (config) => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      loader: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
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
    });

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    });

    console.log(config);

    return config;
  }
};

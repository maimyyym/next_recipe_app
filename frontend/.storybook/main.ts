import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-apollo-client",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
module.exports = {
  stories: ['../src/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls', '@storybook/addon-mdx-gfm'],
  webpackFinal: async config => {
    // Tailwind CSSの設定
    config.module.rules.push({
      test: /\.css$/,
      use: [{
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      }],
      include: require('path').resolve(__dirname, '../')
    });
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
};


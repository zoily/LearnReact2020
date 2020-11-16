module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials",
    "@storybook/addon-jest",
    "storybook-addon-i18next/register",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
  ],
};

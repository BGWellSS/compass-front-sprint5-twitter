module.exports = {
  stories: [
    "./../stories/**/*.stories.mdx",
    "./../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./../app/dist/**/*.stories.mdx",
    "./../app/dist/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
  ],
  staticDirs: ["../app/dist"],
  framework: "@storybook/html",
};

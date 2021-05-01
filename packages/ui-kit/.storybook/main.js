module.exports = {
  stories: [
    "../src/stories/*.stories.mdx",
    "../src/components/**/*.stories.(ts|tsx|js|jsx)"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

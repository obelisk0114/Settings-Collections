// If options.editorconfig is true and an .editorconfig file is in your project,
// Prettier will parse it and convert its properties to the corresponding Prettier configuration.
// This configuration will be overridden by .prettierrc, etc.

const config = {
  // arrowParens: "avoid",
  trailingComma: "all",
  printWidth: 100,
  // singleQuote: true,
  overrides: [
    // {
    //   files: ".prettierrc.js",
    //   options: { parser: "js" }
    // },
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
};

module.exports = config;

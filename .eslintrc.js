module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  globals: {
    ErrorEvent: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    "plugin:prettier/recommended",
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    // allow async-await
    'generator-star-spacing': 'off',
    "arrow-parens": "off",
    // allow debugger during development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}

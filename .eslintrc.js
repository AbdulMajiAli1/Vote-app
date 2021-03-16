module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: { parser: 'babel-eslint' },
  extends: ['airbnb', 'prettier', '@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error'],
    'comma-dangle': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    semi: 0,
  },
};

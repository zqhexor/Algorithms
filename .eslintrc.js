module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 修改具体规则：0: 'off'；1: 'warning'；2: 'error'
  // 每个选项可以设置为 "always"、"never" 或 "ignore"
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};

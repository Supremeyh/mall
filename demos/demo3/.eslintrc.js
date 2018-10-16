// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  globals: {
    "IS_DEV": false
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // "off"或者0    //关闭规则
  //"warn"或者1    //在打开的规则作为警告（不影响退出代码）
  //"error"或者2    //把规则作为一个错误（退出代码触发时为1）
  rules: {
    'generator-star-spacing': 'off',  // allow async-await
    'no-debugger': process.env.NODE_ENV === 'production' ? 2: 0,  // allow debugger during development
    "semi": [0],
    "no-console": process.env.NODE_ENV === 'production' ? 1: 0,
    "no-unused-vars": [2, {
      "vars": "local",  // 允许声明未使用变量
      "args": "none"    // 参数不检查
    }],
    "no-unused-expressions":1,
    "no-mixed-spaces-and-tabs": [1,false],
    "indent":0,
    "space-before-function-paren":0,  //不以新行开始的块{前面要不要有空格
    "space-before-blocks":1,
    "no-trailing-spaces":1,
    "padded-blocks":1,
    "quotes":0,
    "key-spacing":1,
    "spaced-comment":0,
    "eol-last":0,   //文件末尾强制换行,就是代码结尾处,要来个空格,相当于加一行,
    "space-infix-ops":1,
    "comma-spacing":1,
    "arrow-spacing":1,
    'arrow-parens': 0,   // allow paren-less arrow functions
    "no-multiple-empty-lines": [0, {"max": 100}],  //空行最多不能超过100行
    "object-property-newline":1,
    "no-extend-native": 0 //prototype
  }
}

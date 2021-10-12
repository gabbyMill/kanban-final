process.chdir(__dirname)

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    codeFrame: false,
  },

  extends: ['airbnb-standard'],
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'windows'],
    'space-before-function-paren': ['error', 'never'],
    'arrow-parens': ['error', 'always'], // this makes all arrow problems dissapear. if it;s on never, all problems
  },
}

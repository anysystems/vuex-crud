module.exports = {
  root: true,

  parser: '@babel/eslint-parser',

  extends: [
    'airbnb-base',
  ], 

  plugins: [
    'html'
  ],

  parserOptions: {
    sourceType: 'module'
  },

  env: {
    browser: true,
    node: true
  },

  rules: {
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'func-names': 0,
    "requireConfigFile": 0,
  },

  settings: {
    'import/resolver': {
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
    },
  }


  
};

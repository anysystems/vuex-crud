module.exports = {
  root: true,

  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ], 

  plugins: [
    'html',
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
    "import/resolver": {
      "typescript": {}
    },
  }


  
};

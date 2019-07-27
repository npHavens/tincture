const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  preset: 'jest-expo',
  transform: {
    ...tsJestConfig.transform,
    '\\.ts$': './node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsConfig: './tsconfig.jest.json',
      jsx: "react"
    },
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  modulePaths: [
    "./"
  ]
};
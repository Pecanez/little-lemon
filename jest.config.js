module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.css$': 'jest-css-modules-transform',
    },
    transformIgnorePatterns: [
      '/node_modules/',
    ],
  };
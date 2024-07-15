// jest.config.js
module.exports = {
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'jest-transform-stub',
      'swiper/react': '<rootDir>/node_modules/swiper/swiper-react.cjs.js',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.js$': 'babel-jest',
    },
  }
  
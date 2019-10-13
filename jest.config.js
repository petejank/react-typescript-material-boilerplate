module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  modulePaths: ['<rootDir>/src', '<rootDir>'],
  resetModules: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest/setupAfterEnv.ts'],
  setupFiles: ['jest-plugin-context/setup'],
  testMatch: ['<rootDir>/src/**/test.(ts|tsx)'],
  transform: {
    '\\.(svg|png|jpg)$': '<rootDir>/jest/empty.js',
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}

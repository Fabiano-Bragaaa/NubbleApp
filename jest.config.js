module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleDirectories: ['node_modules', './src/test'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/',
    '/mockedData/*',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

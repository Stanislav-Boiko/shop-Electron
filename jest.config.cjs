module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^store$": "<rootDir>/src/store",
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  }
};
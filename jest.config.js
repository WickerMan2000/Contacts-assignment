module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
        '\\.(css|less|svg)$': '<rootDir>/__mocks__/styleMock.js',
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ]
};
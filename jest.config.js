module.exports = {
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['tsx', 'ts', 'js'],
    testMatch: ['**/*.(test|spec).(ts|tsx)'],
    moduleNameMapper: {
        '/@(.*)$/': '<rootDir>/src/$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|mp4|svg|ttf|woff|woff2)$':
            '<rootDir>/src/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

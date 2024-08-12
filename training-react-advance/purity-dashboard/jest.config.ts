/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!**/*.stories.{js,ts,tsx}',
    '!src/main.tsx',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],

  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@/lib(.*)$': '<rootDir>src/lib/$1',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/',
    '<rootDir>/src/lib/constants/',
    '<rootDir>/src/lib/mocks/',
    '<rootDir>/src/lib/models/',
    '<rootDir>/src/lib/providers/',
    '<rootDir>/src/lib/routes/',
    '<rootDir>/src/lib/stores/',
    '<rootDir>/src/lib/types/',
    '<rootDir>/src/lib/utils/',
    '<rootDir>/src/ui/themes/',
    '<rootDir>/src/ui/icons/',
    '<rootDir>/src/ui/index.ts',
    '<rootDir>/src/ui/components/index.ts',
    '<rootDir>/src/ui/pages/index.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
    '<rootDir>/src/lib/services/index.ts',
  ],
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};

export default config;

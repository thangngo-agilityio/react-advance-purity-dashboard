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
    '<rootDir>/src/lib/constant',
    '<rootDir>/src/lib/icons/',
    '<rootDir>/src/themes/',
    '<rootDir>/src/types/',
    '<rootDir>/src/lib/ui/index.ts',
    '<rootDir>/src/lib/ui/components/index.ts',
    '<rootDir>/src/pages/index.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
    '<rootDir>/src/services/index.ts',
    '<rootDir>/src/sections/index.ts',
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

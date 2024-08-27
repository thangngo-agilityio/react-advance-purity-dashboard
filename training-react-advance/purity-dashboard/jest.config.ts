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
    '**/*.{ts,tsx}',
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
    '^@/assets(.*)$': '<rootDir>src/assets/$1',
    '^@/components(.*)$': '<rootDir>src/components/$1',
    '^@/services(.*)$': '<rootDir>src/services/$1',
    '^@/pages(.*)$': '<rootDir>src/pages/$1',
    '^@/hooks(.*)$': '<rootDir>src/hooks/$1',
    '^@/constants(.*)$': '<rootDir>src/constants/$1',
    '^@/utils(.*)$': '<rootDir>src/utils/$1',
    '^@/mocks(.*)$': '<rootDir>src/mocks/$1',
    '^@/stores(.*)$': '<rootDir>src/stores/$1',
  },

  coveragePathIgnorePatterns: [
    '<rootDir>/src/themes/',
    '<rootDir>/src/icons/',
    '<rootDir>/src/constants/',
    '<rootDir>/src/routes/',
    '<rootDir>/src/types/',
    '<rootDir>/src/mocks/',
    '<rootDir>/src/models/',
    '<rootDir>/src/providers/',
    '<rootDir>/src/stores/',
    '<rootDir>/src/utils/',
    '<rootDir>/src/pages/index.ts',
    '<rootDir>/src/layouts/index.ts',
    '<rootDir>/src/components/index.ts',
    '<rootDir>/src/components/Form/index.ts',
    '<rootDir>/src/components/Sidebar/index.ts',
    '<rootDir>/src/components/Sidebar/index.ts',
    '<rootDir>/src/components/Skeleton/index.ts',
    '<rootDir>/src/lib/hooks/index.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
    '<rootDir>/src/lib/components/Form/index.ts',
    '<rootDir>/src/lib/layouts/index.ts',
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

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
    '^@/components(.*)$': '<rootDir>src/ui/components/$1',
    '^@/services(.*)$': '<rootDir>src/lib/services/$1',
    '^@/pages(.*)$': '<rootDir>src/ui/pages/$1',
    '^@/hooks(.*)$': '<rootDir>src/lib/hooks/$1',
    '^@/constants(.*)$': '<rootDir>src/lib/constants/$1',
    '^@/utils(.*)$': '<rootDir>src/lib/utils/$1',
    '^@/mocks(.*)$': '<rootDir>src/lib/mocks/$1',
    '^@/stores(.*)$': '<rootDir>src/lib/stores/$1',
    '^@/ui(.*)$': '<rootDir>src/ui/$1',
    '^@/lib(.*)$': '<rootDir>src/lib/$1',
  },

  coveragePathIgnorePatterns: [
    '<rootDir>/src/ui/themes/',
    '<rootDir>/src/lib/constants/',
    '<rootDir>/src/lib/routes/',
    '<rootDir>/src/lib/types/',
    '<rootDir>/src/lib/mocks/',
    '<rootDir>/src/lib/models/',
    '<rootDir>/src/lib/providers/',
    '<rootDir>/src/lib/stores/',
    '<rootDir>/src/lib/utils/',
    '<rootDir>/src/ui/index.ts',
    '<rootDir>/src/ui/pages/index.ts',
    '<rootDir>/src/ui/layouts/index.ts',
    '<rootDir>/src/ui/components/index.ts',
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

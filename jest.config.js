module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/jest-setup/"],
  // coverageReporters: ["cobertura", "lcov", "text"],
  // coverageThreshold: {
  //   global: {
  //     statements: 93.0,
  //     lines: 93.0,
  //     functions: 86.0,
  //   },
  // },
};

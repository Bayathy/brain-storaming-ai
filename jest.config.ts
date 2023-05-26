import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules"],
};

export default config;

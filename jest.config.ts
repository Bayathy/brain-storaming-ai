import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default config;

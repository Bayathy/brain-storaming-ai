// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
        "@linaria",
        "@babel/preset-typescript",
      ],
    },
  },
};

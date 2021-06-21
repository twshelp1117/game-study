module.exports = {
  mode: "development",
  target: "node-webkit",
  entry: `${__dirname}/src/main.ts`,
  output: {
    path: `${__dirname}/docs/js`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".css", ".ts", ".tsx"],
  },
};

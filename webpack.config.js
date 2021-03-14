module.exports = {
  mode: "development",
  target: "node-webkit",
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/docs/js`,
    filename: "index.js",
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

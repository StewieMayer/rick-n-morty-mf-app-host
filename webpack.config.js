const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const { dependencies } = require("./package.json");

module.exports = (env, argv) => {
  const isStandalone = env && env.standalone ? true : false;

  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@rutes": path.resolve(__dirname, "src/routes"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ModuleFederationPlugin({
        name: "mf-host",
        remotes: isStandalone
          ? {}
          : {
              "mf-characters":
                "mf-characters@http://localhost:3001/re-mf-characters.js",
            },
        shared: {
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
            eager: isStandalone,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
            eager: isStandalone,
          },
          "react-router-dom": { singleton: true, eager: isStandalone },
        },
      }),
    ],
    devServer: {
      static: "./dist",
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};

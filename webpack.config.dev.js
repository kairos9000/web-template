const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.tsx$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        getCustomTransformers: () => ({
                            before: [ReactRefreshTypeScript()],
                        }),
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ],
    devServer: {
        open: true,
    },
};
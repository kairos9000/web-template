const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        app: "./src/index.tsx",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.json",
                        },
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};

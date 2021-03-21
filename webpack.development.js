const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        app: "./src/index.tsx",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.dev.json",
                        },
                    },
                ],
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
    ],
    devServer: {
        host: "0.0.0.0",
        port: 80,
        open: true,
        openPage: "http://localhost:80",
        stats: "errors-only",
        hot: true,
        overlay: {
            warnings: true,
            errors: true,
        },
        contentBase: path.resolve(__dirname, "assets"),
    },
};

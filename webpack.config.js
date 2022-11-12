const path = require("path"); //載入模組. path

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    /*
		 path.resolve : 將相對路徑 轉為 絕對路徑。解決跨系統路徑問題 windows Linux 
			__dirname: 當前資料夾路徑 /Users/username/Desktop/webpack

	*/
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

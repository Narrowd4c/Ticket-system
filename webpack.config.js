const path = require("path"); //載入模組. path

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    /*
		 path.resolve : 將相對路徑 轉為 絕對路徑。解決跨系統路徑問題 windows Linux 
			__dirname: 當前資料夾路徑 /Users/username/Desktop/webpack

	*/
    filename: "main.js",
  },
  
};

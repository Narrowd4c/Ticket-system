# Ticket-system

<img src="https://i.imgur.com/51bpI75.png" alt="封面" width="600"/>  

[頁面](https://narrowd4c.github.io/Ticket-system/dist/index.html)

#### 以原生 JavaScript 製作新增與搜尋功能

## 使用
### Tailwind.css 切版  

- 參考 [Tailwind 官網](https://tailwindcss.com/)
  
### Webpack 壓縮打包檔案

- [Youtube 【前端速成】Webpack5 快速入門｜Tiktok工程師帶你入門前端｜布魯斯前端](https://www.youtube.com/watch?v=uP6KTupfyIw&t=3775s)
  > 備註：影片中 DevServe 的 contentBase 被 static 取代。官方文件 [Changelog](https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md)
- [Setup Webpack with Tailwind CSS](https://gist.github.com/bradtraversy/1c93938c1fe4f10d1e5b0532ae22e16a)

### C3.js 圖表套件

- 參考 [C3.js 官網](https://c3js.org/)

### git-cz 規範 commit 內容 

 - 參考[來吧！用 git-cz 讓你的 Git Commit 訊息更美一點！](https://israynotarray.com/git/20221115/721294310/?fbclid=IwAR2Iqw4H1H6quWIUi7FzRV9a11OUxhA_CydlVOQJ9Zu8CAw9HDn6XGkg7ZM)

## 感想
 1. Webpack : 
     - 參考的資料有點不合時宜，結合 Tailwind.css 使用 DevServe 重新渲染時間太久，圖片沒使用 assetModule 去載入
     - 改進方向 : 語法認識太少，可參考其他 webpack 如何設定
 2. Tailwind : 
     - 熟練度不足，使用太多自訂class，而不是修改設定檔。會誤用 BootStrap5 語法
     - 改進方向 : 提升熟練度

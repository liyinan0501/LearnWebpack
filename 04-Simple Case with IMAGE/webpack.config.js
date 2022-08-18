const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径文件夹名字
    filename: 'bundle.js', // 出口文件名字 (代码打包进这里)
  },
  // 借助插件，无需单独自行创建 html 文件.
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 参照html文件
    }),
  ],
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // 让webpack使用这两个loader处理css文件。
        //! use 执行是从右到左，不能颠倒顺序。
        // css-loader：webpack解析css文件，把css代码打包到js中。
        // style-loader: 把 CSS 插入到 DOM 中。
        exclude: /node-modules/,
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node-modules/,
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/i,
        type: 'asset',
      },
    ],
  },
}

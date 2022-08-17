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
}

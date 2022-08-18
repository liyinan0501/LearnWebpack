const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径文件夹名字
    filename: 'bundle.js', // 出口文件名字 (代码打包进这里)
    assetModuleFilename: 'images/[hash][ext][query]',
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
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset/resource', // 所有的文体图标文件，都输出到dist下
        generator: {
          // 生成文件名字 - 定义规则
          filename: 'fonts/[name].[hash:6][ext]', // [ext]会替换成 .eot/.woff
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // 加载器选项
          options: {
            presets: ['@babel/preset-env'], // 预设：@babel/preset-env 降级规则
          },
        },
      },
    ],
  },
  devServer: {
    port: 3000,
  },
}

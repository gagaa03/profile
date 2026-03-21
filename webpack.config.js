const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/template.html', // 從 src/template.html 複製到 dist
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // 產出到 dist/css/
        }),
    ],
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
          {
            // 處理 Sass 和 CSS
            test: /\.s[ac]ss$/i, // 匹配 .sass 或 .scss 檔案
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',   // 轉譯 CSS 成 CommonJS
                'sass-loader',  // 將 Sass 編譯成 CSS
            ],
          },
          {
            // 處理字體
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name][ext]', // 編譯後放在 dist/fonts/
            }
          },          
          {
            // 處理圖片
              test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'images/[name][ext]'
              }
          },
        ],
    },
};
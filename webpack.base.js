const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 抽离css
const extractCss = new ExtractTextPlugin("style.css")
// html 模版
const htmlTemplate = new HtmlWebpackPlugin({template:'./src/index.html',favicon: './public/favicon.ico'})
const config = {
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[hash:4].js'
    },
    module:{
        rules:[
            {
                test: /\.(woff|eot|ttf|svg|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024' ,
                            name: '[name].[hash:4].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024',
                            name: '[name].[hash:4].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader","less-loader"]
                })
            },
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/
            }
        ]
    },
}

module.exports = {
    htmlTemplate,
    extractCss,
    config
}

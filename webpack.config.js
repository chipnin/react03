const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/index.js'),
	},

	output: {
		path: path.resolve('public'),
		filename: 'js/app.bundle.js',
		publicPath: '/',
	},

	plugins: [
		new CleanWebpackPlugin(['public']),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, 'src/index.html'),
			filename: path.join(__dirname, 'public/index.html')
		}),
		new ExtractTextPlugin('css/style.css'),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react', 'stage-2']
						}
					}
				]
			},
			{
				test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
			},
		]
	}
}
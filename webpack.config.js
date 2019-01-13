let path = require('path');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['./public/src/js/todo/index.js', './public/src/css/task.css'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /(node_modules)/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'dist/'
						}
					}
				]
			},
		],
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: './task.css',
			chunkFilename: '[id].css'
		})
	],
        
};

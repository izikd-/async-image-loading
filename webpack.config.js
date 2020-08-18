const config = {
	entry: ['./app.js'],
	output: {
		path: __dirname + '/build',
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
}
module.exports = config;

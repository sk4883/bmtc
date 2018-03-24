var path = require("path");

const webpack = require("webpack");

module.exports = {
	entry:  "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public")
	},
	watch:  true,
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude:/node_modules/,
			query:{
				presets:["react", "es2015"],
			}
		}
	}]

};



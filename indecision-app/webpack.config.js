const path=require('path');

module.exports={
	//entry point
	entry : './src/app.js',
	//output file
	output : {
		path : path.join(__dirname,'public'),
		filename : 'bundle.js'
	},
	//babel to transform JSX to JS
	module :{ 
		rules:[
			{
				loader : 'babel-loader',
				//$ means no other character present after 'js'
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test : /\.s?css$/,
				use :[
						'style-loader',
						'css-loader',
						'sass-loader'
					]	
			}
		]
	},
	//source map for debugging
	devtool : 'source-map',
	//webpack dev server
	devServer:{
		contentBase : path.join(__dirname,'public')
	}
};
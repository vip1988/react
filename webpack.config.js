process.noDeprecation = true;

var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        bundle: './main.js',
        vendors: [
            'babel-polyfill',
            'react',
			'react-dom'
		]
    },
    output: {
        filename: '[name].js',
        publicPath: '/assets/',
        path: path.join(__dirname, 'public', 'assets'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'babel-loader',
                options: {
                    presets: [ 'react', 'es2017', 'stage-0' ]
                },
                exclude: /node_modules/
            },
            {
                // test: /\.css$/,
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
                test: /\.css$/,
                  use: [
                      "style-loader", 
                     "css-loader"
                     ]
            },
            {
				test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
			},
			{
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
              }, {
                test: /\.mp4$/,
                loader: 'url?limit=10000&mimetype=video/mp4'
            }
        ]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              reuseExistingChunk: true
            }
          }
        }
      },
    //   plugins: [
    //     new ExtractTextPlugin("styles.css"),
    //   ],
    
    externals: {
        config: JSON.stringify(require('config'))
    },
	resolve: {
         extensions: [".js", ".jsx"],
        alias: {
            'react$': 'react/cjs/react.production.min.js',
            'react-dom$': 'react-dom/cjs/react-dom.production.min.js',
            Source: __dirname + '/src'

		}
	}
};


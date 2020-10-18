const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //run babel loader when it see's .js file saved
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use:[MiniCssExtractPlugin.loader,
                     {
                        loader:'css-loader', 
                        options:{
                            sourceMap: true
                        } 
                    },
                    {
                        loader:'sass-loader', 
                        options:{
                            sourceMap: true
                        }    
                    } 
                ] 
            }]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            inline: false,
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
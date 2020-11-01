const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
    const isProduction = env === 'production';
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public','dist'),
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
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APPID': JSON.stringify(process.env.FIREBASE_APPID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            inline: false,
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};
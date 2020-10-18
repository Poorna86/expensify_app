const path = require('path')

module.exports = {
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
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        inline: false,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
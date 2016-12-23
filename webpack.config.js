module.exports = {
    entry: './app/assets/javascripts/js-init.js',
    output: {
        path: './app/assets/javascripts',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{ test: /\.js|.jsx$/, exclude: /node_modules/, loader: "babel-loader" }]
    }
};
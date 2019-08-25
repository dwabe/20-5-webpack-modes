const path = require('path');

module.exports = (env) => {
    const environment = env || 'production';

    return {
        mode: environment,
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                }
            ]
        }
    }
};

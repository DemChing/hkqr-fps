const path = require('path');

module.exports = {
    entry: {
        'HKQR': './src/HKQR/index.ts',
        'FPS': './src/FPS/index.ts',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/webpack'),
    },
};
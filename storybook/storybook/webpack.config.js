const path = require('path');
const webpackMerge = require('webpack-merge');

module.exports = ({config}) => {
    config = webpackMerge(config, {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options: {
                        projectReferences: true
                    }
                }
            ]
        },
        resolve: {
            alias: {
                'react': require.resolve('react')
            }
        }
    });

    config.module.rules.shift();
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};

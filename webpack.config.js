const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');
const packageJson = require('./package.json');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const publicPath = isProduction
    ? 'https://tone4hook.github.io/vista-dictionary/'
    : 'http://localhost:8082/';

  return {
    output: {
      publicPath,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.vue', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: 8082,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.tsx?$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsSuffixTo: ['\\.vue$'],
                happyPackMode: true,
              },
            },
          ],
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [
      new VueLoaderPlugin(),
      new ModuleFederationPlugin({
        name: 'vista_dictionary',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './Vista': './src/pages/Vista.vue',
        },
        shared: packageJson.dependencies,
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new Dotenv(),
    ],
  };
};

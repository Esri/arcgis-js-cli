const ArcGISPlugin = require('@arcgis/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = function(_, arg) {
    const config = {
        entry: {
            index: [
                'regenerator-runtime',
                '@dojo/framework/shim/Promise',
                './src/css/main.scss',
                './src/worker-config.ts',
                './src/index.tsx'
            ]
        },
        output: {
            filename: '[name].[chunkhash].js',
            publicPath: ''
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: arg.mode === 'development'
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        discardComments: {
                            removeAll: true
                        },
                        // Run cssnano in safe mode to avoid
                        // potentially unsafe transformations.
                        safe: true
                    }
                })
            ]
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    exclude: /node_modules/,
                    use: ['vue-loader', 'eslint-loader']
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: false }
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpe?g|png|gif|svg|webp)$/,
                    loader: 'url-loader',
                    options: {
                        // Inline files smaller than 10 kB (10240 bytes)
                        limit: 10 * 1024,
                        esModule: false
                    }
                },
                {
                    test: /\.(wsv|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'build/[name].[ext]',
                                esModule: false
                            }
                        }
                    ]
                },
                {
                    test: /\.css$|\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'resolve-url-loader',
                            options: { includeRoot: true }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [path.resolve('./node_modules')]
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(arg.mode || 'production')
            }),

            new CleanWebpackPlugin(),

            new CopyWebpackPlugin([
                {
                    from: './public/.htaccess'
                }
            ]),

            new ArcGISPlugin({
                useDefaultAssetLoaders: false,
                features: {
                    '3d': false,
                    has: {
                        'esri-native-promise': true
                    }
                },
                options: {
                    loader: path.join(__dirname, './public/loader/loader.js')
                }
            }),

            new VueLoaderPlugin(),

            new HtmlWebPackPlugin({
                title: 'ArcGIS Vue Template',
                template: './public/index.ejs',
                filename: './index.html',
                favicon: './public/assets/favicon.ico',
                chunksSortMode: 'none',
                inlineSource: '.(css)$',
                mode: arg.mode
            }),

            new HtmlWebPackPlugin({
                template: './public/oauth-callback.html',
                filename: './oauth-callback.html',
                chunksSortMode: 'none',
                inject: false
            }),

            new MiniCssExtractPlugin({
                filename: '[name].[chunkhash].css',
                chunkFilename: '[id].css'
            }),

            new HtmlWebpackInlineSourcePlugin(),

            new WebpackPwaManifest({
                name: 'ArcGIS Vue Template',
                short_name: 'ArcGISVueTemplate',
                description: 'Vue Template for ArcGIS JSAPI',
                background_color: '#0079c1',
                theme_color: '#0079c1',
                icons: [
                    {
                        src: path.resolve('public/assets/icon.png'),
                        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                    }
                ]
            })
        ],
        resolve: {
            modules: [path.resolve(__dirname, 'src/'), path.resolve(__dirname, 'node_modules/')],
            extensions: ['.ts', '.tsx', '.js', '.vue', '.scss', '.css'],
            alias: {
                vue$: arg.mode === 'production' ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
                '@': path.resolve(__dirname, 'src/')
            }
        },
        node: {
            process: false,
            global: false,
            Buffer: false,
            setImmediate: false,
            fs: 'empty'
        }
    };

    if (arg.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (arg.mode === 'production') {
        config.plugins.push(
            new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true,
                // Exclude images from the precache
                exclude: [/\.(?:png|jpg|jpeg|svg|gif)$/],

                // Define runtime caching rules.
                runtimeCaching: [
                    {
                        // Match any request ends with .png, .jpg, .jpeg or .svg.
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                        // Apply a cache-first strategy.
                        handler: 'cacheFirst'
                    },
                    {
                        // Match any fonts
                        urlPattern: /\.(?:eot|ttf|jpeg|woff|woff2)$/,
                        // Apply a cache-first strategy.
                        handler: 'cacheFirst'
                    },
                    {
                        urlPattern: new RegExp('^https://js.arcgis.com/'),
                        handler: 'staleWhileRevalidate'
                    },
                    {
                        urlPattern: new RegExp('^https://arcgis.com/sharing/'),
                        handler: 'staleWhileRevalidate'
                    },
                    {
                        urlPattern: new RegExp('^https://static.arcgis.com/'),
                        handler: 'staleWhileRevalidate'
                    },
                    // Google Material stuff
                    {
                        urlPattern: new RegExp('^https://fonts.gstatic.com/'),
                        handler: 'staleWhileRevalidate'
                    },
                    {
                        urlPattern: new RegExp('^https://fonts.googleapis.com/'),
                        handler: 'staleWhileRevalidate'
                    }
                ]
            })
        );
    }

    return config;
};

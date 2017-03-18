var cssnext = require("postcss-cssnext");

exports.modifyWebpackConfig = function (config, env) {
  config.merge({
    postcss: [
      cssnext({
        browsers: ['>1%', 'last 2 versions'],
      }),
    ],
  });

  config.removeLoader('images');
  config.loader('images', {
    test: /\.(jpe?g|png|gif)(\?.*)?$/i,
    loaders: [
      'url-loader?limit=10000',
      'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}', // eslint-disable-line
    ],
  });

  config.loader('svg', function(cfg) {
    cfg.test = /\.svg$/
    cfg.loader = "svg-inline-loader"
    return cfg;
  })

  return config;
};

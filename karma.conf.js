const webpackConfig = require("./webpack.config.js");
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai-dom', 'chai', 'sinon'],
    files: [
      'spec/spec_helper.js',
      'spec/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      "spec/**/*.js": ["webpack"]
    },
    // webpack configuration
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: "errors-only"
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity
  })
}

var gulp= require('gulp');
var babel= require('gulp-babel');
var browserSync= require('browser-sync').create();
var browserify= require('browserify');
var babelify = require("babelify");
var gutil = require('gulp-util');
var webpackStream = require('webpack-stream');
var webpack= require('webpack');
var notify = require('gulp-notify');
var path = require('path');
var WebpackDevServer = require("webpack-dev-server");

gulp.task('default', function(){
    return gulp.src('./app/app.module.js')
                    .pipe(webpackStream({
                        output: {
                        path: path.join(__dirname, 'app/dest'),
                        filename: "bundle.js"
                    }}))
                    .pipe(gulp.dest('./app/dest'));
});

gulp.task('serve', function(callback){
    var compiler = webpack({
         module: {
        loaders: [
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
        entry: "./app/app.module.js",
        plugins: []
    });
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(3001, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:3001/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});
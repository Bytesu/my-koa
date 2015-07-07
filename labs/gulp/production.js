'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    through = require('through'),
    gutil = require('gulp-util'),
    plugins = gulpLoadPlugins(),
    path = require('./paths');

var pro = [ 'pro.less', 'pro.ejs', 'pro.js','clean'];
/**
 * js 脚本处理
 */
gulp.task('pro.js',['clean.js'], function () {
    return gulp.src(path.js.src)
        .pipe(gulp.dest(path.js.dest));
});
/**
 * less编译
 */
gulp.task('pro.less',['clean.css'], function () {
    return gulp.src(path.css.watch)
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest(path.css.dest));
});

/**
 * move ×.ejs to tmc/views
 */
gulp.task('pro.ejs',['clean.ejs'], function () {
    return gulp.src(path.ejs.src)
        .pipe(gulp.dest(path.ejs.dest));
});
gulp.task('build', pro);
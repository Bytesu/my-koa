'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    through = require('through'),
    plugins = gulpLoadPlugins(),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    path = require('./paths'),
    nodemon = require('gulp-nodemon'),
    defaultTasks = ['clean','dev.less', 'dev.ejs', 'dev.js', 'dev.watch'];

/***
 * path
 */

/**
 * js 脚本处理
 */
gulp.task('dev.js', ['clean.js'], function () {
    return gulp.src(path.js.src)
        .pipe(watch(path.js.src))
        .pipe(gulp.dest(path.js.dest))
        .pipe(livereload());
});
/**
 * less编译
 */
gulp.task('dev.less',['clean.css'], function () {
    return gulp.src(path.css.watch)
        /*.pipe(watch(path.css.watch,['dev.less']))*/
        .pipe(less())
        .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest(path.css.dest))
        .pipe(livereload())
});

/**
 * move ×.ejs to tmc/views
 */
gulp.task('dev.ejs', ['clean.ejs'], function () {
    return gulp.src(path.ejs.src)
        /*.pipe(watch(path.ejs.src))*/
        .pipe(gulp.dest(path.ejs.dest))
        .pipe(livereload());
});
/**
 * 监听文件变动
 */
gulp.task('dev.watch', function () {
    livereload.listen();
    nodemon({
        script: 'server.js',
        ext: 'html js less',
        env: {'NODE_ENV': 'development'},
        ignore: ['node_modules/', 'bower_components/'],
        nodeArgs: ['--debug']
    });
    gulp.watch(path.ejs.src, ['dev.ejs']);
    gulp.watch(path.js.src, ['dev.js']);
    gulp.watch(path.css.watch, ['dev.less']);
});

gulp.task('development', defaultTasks);
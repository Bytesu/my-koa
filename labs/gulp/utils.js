var gulp = require('gulp');
var del = require('del');
var path = require('./paths');

/**
 *清空css构建输出目录
 */
gulp.task('clean.css', function (cb) {
    del(path.css.dest,cb)
});
/**
 *清空ejs母板构建输出目录
 */
gulp.task('clean.ejs', function (cb) {
    del(path.ejs.dest,cb);
});

/**
 *清空js构建输出目录
 */
gulp.task('clean.js', function (cb) {
    del(path.js.dest,cb);
});
gulp.task('clean', ['clean.css', 'clean.js', 'clean.ejs']);
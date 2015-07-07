/**
 * Created by byte_ on 2015/7/7.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            proxy: "byte.com"
        }
    });
});
'use strict';

const gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({lazy : true});;

gulp.task('test', function(done) {
    return gulp
        .src('./test/**/*.spec.js', {read : false})
        .pipe(plugins.mocha({reporter : 'spec'}))
        .pipe(plugins.istanbul.writeReports())
        .on('error', function(err) {
            throw err;
        })
        .on('end', function() {
            process.exit();
        });
});


gulp.task('default', ['test']);

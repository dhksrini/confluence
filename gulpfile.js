'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
    // return gulp.src('./dev/**/*.scss')
    gulp.src('./dev/sass/global.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dev/css'));
    gulp.src('./dev/sass/home.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dev/css'));
});

gulp.task('watch', function() {
    gulp.watch('./dev/sass/**/*.scss', ['sass']);
});

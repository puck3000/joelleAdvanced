var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var config     = require('../config').minifyCss;

// concat & minify imported css
gulp.task('minifyCss', function() {
    gulp.src(config.src)
    .pipe(concatCss("allCssImports.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.dest))
});
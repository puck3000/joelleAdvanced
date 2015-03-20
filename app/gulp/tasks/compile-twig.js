var gulp = require('gulp');
var twig = require('gulp-twig');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config     = require('../config').compileTwig;

// Compile Twig
gulp.task('compile-twig', function() {
    return gulp.src(config.src)
      	.pipe(twig())
     	.pipe(gulp.dest(config.dest))
    	.pipe(reload({stream:true}));
       
});
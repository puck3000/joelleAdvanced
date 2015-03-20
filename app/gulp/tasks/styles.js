var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var autoprefixer = require('autoprefixer-stylus');
var config     = require('../config').styles;

// styles task
gulp.task('styles',['minifyCss'], function() {
    return gulp.src(config.src)
      .pipe(stylus({
        'include css': true,
      	compress:true,
        use: [autoprefixer(), jeet()]
      }))
	   .pipe(gulp.dest(config.dest))
     .pipe(reload({stream:true}));

});

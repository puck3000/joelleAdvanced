var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config     = require('../config').vendorScripts;


gulp.task('vendorScripts', function() {
    return gulp.src(config.src)
     .pipe(gulp.dest(config.dest))
     .pipe(reload({stream:true}));
});
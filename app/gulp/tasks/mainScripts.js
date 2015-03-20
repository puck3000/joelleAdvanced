var gulp        = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config     = require('../config').mainScripts;


gulp.task('mainScripts', function() {
    return gulp.src(config.src)
     .pipe(uglify())
     .pipe(gulp.dest(config.dest))
     .pipe(reload({stream:true}));

});
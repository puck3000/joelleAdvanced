var gulp = require('gulp');
var browserSync = require('browser-sync');
var config     = require('../config').browserSync;

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync(config);
});
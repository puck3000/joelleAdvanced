var gulp = require('gulp');
var config  = require('../config').general;



// default Task
gulp.task('default',['styles', 'compile-twig', 'browser-sync', 'scripts', 'images'], function () {
	gulp.watch(config.watchStyles, ['styles']);
	gulp.watch(config.watchTwig, ['compile-twig']);
	gulp.watch(config.watchScripts, ['scripts']);

});
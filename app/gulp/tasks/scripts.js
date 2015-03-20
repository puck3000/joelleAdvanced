// scripts.js
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('scripts', function(callback) {
  runSequence(
  'vendorScripts',
  'plugScripts',
  'mainScripts',
  callback);
});
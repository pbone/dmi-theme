var gulp = require('gulp');
var del = require('del');
var fs = require('fs');

// Gulp Task - CLEAN
// ====================

// Clean CSS files.
gulp.task('clean', function () {
  return del([
    'css/**/*.css',
    'css/**/*.map'
  ], {force: true});
});

'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

// Require gulp directory
requireDir('./gulp_tasks', {recurse: true});

// Gulp Tasks
// ====================

// Build task
gulp.task('build',
  gulp.series( 'clean', gulp.parallel( 'style', 'scripts' ), 'server' )
);

// Default Task
gulp.task('default',
  gulp.series( 'build', 'watch' )
);
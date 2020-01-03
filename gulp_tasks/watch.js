var gulp = require('gulp');
var fs = require('fs');
var $  = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

// Watch Task
// Watch for changes to static assets, pages, Sass, and JavaScript
// ================================

gulp.task('watch', watchFiles);

function watchFiles(done) {
  // watch scss folder
  gulp.watch('src/scss/**/*.scss').on('all', gulp.series('style'), reload);
  // watch js folder
  gulp.watch('src/js/**/*.js').on('all', gulp.series('scripts'), reload);
  // watch template folder
  gulp.watch('templates/**/*').on('all', reload);
  // watch .yml files
  gulp.watch('**/*.yml').on('all', reload);
  // watch .theme files
  gulp.watch('**/*.theme').on('all', reload);
  // watch styleguide folder
  // gulp.watch('styleguide/**/*').on('all', reload);

  done();
}

// Reload the browser with BrowserSync
function reload() {
  return browserSync.reload();
}

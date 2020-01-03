var gulp = require('gulp');
var $  = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

// Gulp Tasks
// Run drush to clear the theme registry
// ====================

gulp.task('drush', clearCache);

// Reload the browser with BrowserSync
function clearCache() {
  return gulp.src('gulpfile.js', {read: false})
  .pipe($.shell([
    'drush cc css-js',
  ]))
  .pipe(browserSync.reload({stream: true}))
  .pipe($.notify({
    title: "Caches cleared",
    message: "Drupal caches cleared.",
    onLast: true
  }));
}

var gulp = require('gulp');
var $  = require('gulp-load-plugins')();

// Gulp Tasks
// Optimize Images
// ====================

gulp.task('images', minifyImage);

function minifyImage() {
  return gulp.src('images/**/*')
    .pipe($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{
        cleanupIDs: false
      }]
    }))
    .pipe(gulp.dest('images'))
    .pipe($.notify({
       title: "Images Optimized",
       onLast: true
    }));
}

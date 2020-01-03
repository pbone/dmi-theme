var gulp = require('gulp');
var del = require('del');
var fs = require('fs');
var extend = require('extend');
var importOnce = require('node-sass-import-once');
var $  = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var scssFiles = [
  'src/scss/**/*.scss',
  // Do not open scss partials as they will be included as needed.
  '!' + 'src/scss/**/_*.scss',
];

// Gulp Task - STYLE
// ====================

// Build CSS for development environment.
gulp.task('style', gulp.parallel(scss));

function scss () {
  return gulp.src(scssFiles)
    .pipe($.sourcemaps.init())
    // Allow the options object to override the defaults for the task.
    .pipe($.sass(extend(true, {
      noCache: true,
      outputStyle: 'compressed',
      sourceMap: true,
      importer: importOnce,
      includePaths: [
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src'
      ],
      ignore: ['']
    })).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: [
        'last 2 versions',
        'ie >= 9'
      ]
    }))
    .pipe($.rename({dirname: ''}))
    .pipe($.size({showFiles: true}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
    .pipe($.notify({
       title: "SCSS Compiled",
       message: "Your CSS files are ready.",
       onLast: true
    }));
}

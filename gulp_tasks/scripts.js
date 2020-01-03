var gulp = require('gulp');
var $  = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


//script paths
var jsFiles = ['src/js/vendor/*.js', 'node_modules/slick-carousel/slick/slick.js', 'node_modules/vivus/dist/vivus.js', 'src/js/top_bar_active.js', 'src/js/infobuilders.js'],
    jsDest = 'js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('infobuilders.js'))
        .pipe(rename('infobuilders.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.notify({
            title: "JS Compiled",
            message: "Your JS files are ready.",
            onLast: true
        }));
});
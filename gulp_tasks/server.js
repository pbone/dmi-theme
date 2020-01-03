var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var browserSync = require("browser-sync");

// Gulp Task - SERVER
// ====================

// Start a server with BrowserSync using proxy
gulp.task("server", initServer);

function initServer(done) {
  browserSync.init({
    proxy: "https://infobuilders.patstage.dd:8443/",
    online: true
  });

  done();
}

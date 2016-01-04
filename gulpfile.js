var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
  browserSync({
    files: [
      'public/css/**/*.css',
      'public/**/*.html',
      'public/js/**.js'
    ],
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('default', ['browser-sync']);

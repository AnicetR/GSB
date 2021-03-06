var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'public/bower_components/foundation-sites/scss',
  'public/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('public/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['public/scss/**/*.scss'], ['sass']);
});

var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
gulp.task('default', function () {
  return gulp.src('wdio.conf.js').pipe(webdriver());
})

gulp.task('sendMail', function () {
  return gulp.src('sendMail.spec.js').pipe(webdriver());
})

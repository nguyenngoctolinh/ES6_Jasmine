var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
var shell = require('gulp-shell');

gulp.task('test', () => {
  return gulp.src('wdio.conf.js').pipe(webdriver());
});

gulp.task('report', () => {
  return gulp.src('wdio.conf.js')
    .pipe(shell([
      'allure generate reports',
      'allure report open'
    ]));
});

gulp.task('sendmail', () => {
  return gulp.src('wdio.conf.js')
    .pipe(shell([
      'node ./src/utils/zip.js',
      'node ./src/utils/send_mail.js'
    ]));

});

gulp.task('default', ['test', 'report']);

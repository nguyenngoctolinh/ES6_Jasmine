var gulp = require('gulp');
var webdriver = require('gulp-webdriver');
var shell = require('gulp-shell');

gulp.task('default', () => {
  return gulp.src('wdio.conf.js').pipe(webdriver());
});

gulp.task('reportSM', () => {
  return gulp.src('wdio.conf.js')
    .pipe(shell([
      'allure generate reports',
      'node ./src/utils/zip.js',
      'node ./src/utils/send_mail.js',
      'allure report open -p 8080'

    ]));
});



var gulp = require('gulp');
// import gulp from 'gulp'
var webdriver = require('gulp-webdriver');
// import webdriver from 'gulp-webdriver'
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


gulp.task('default', ['test', 'report']);

var gulp = require('gulp');
// import gulp from 'gulp'
var webdriver = require('gulp-webdriver');
// import webdriver from 'gulp-webdriver'

gulp.task('default', function () {
  return gulp.src('wdio.conf.js').pipe(webdriver());
})


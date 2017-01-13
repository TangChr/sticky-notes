var gulp = require('gulp'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * Copyright (c) <%= year  %> <%= pkg.author %>',
  ' * <%= pkg.license %>',
  ' */',
  ''].join('\n');
 
gulp.task('sass', function () {
  return gulp.src('./master.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('sticky.css'))
    .pipe(header(banner, {pkg: pkg, year: new Date().getFullYear()}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass']);
var gulp   = require('gulp'),
    clean  = require('gulp-clean-css'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    sass   = require('gulp-sass'),
    pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * Copyright (c) <%= year  %> <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/TangChr/sticky-notes/blob/master/LICENSE)',
  ' */',
  ''].join('\n');
  var header_opts = {pkg: pkg, year: new Date().getFullYear()};
 
gulp.task('sass', function () {
  return gulp.src('./sticky.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('sticky.css'))
    .pipe(header(banner, header_opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', ['sass'], function () {
  return gulp.src('./dist/sticky.css')
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(header(banner, header_opts))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass', 'clean']);
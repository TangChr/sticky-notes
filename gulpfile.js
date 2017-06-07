var gulp     = require('gulp-param')(require('gulp'), process.argv),
    header   = require('gulp-header'),
    rename   = require('gulp-rename'),
    sass     = require('gulp-sass'),
    sassVars = require('gulp-sass-variables'),
    argv     = require('yargs').argv;

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * Copyright (c) <%= year  %> <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/TangChr/sticky-notes/blob/master/LICENSE)',
  ' */',
  ''].join('\n');
  var header_opts = {pkg: pkg, year: new Date().getFullYear()};
 
gulp.task('build', function (classic) {
  return gulp.src('./sticky.scss')
    .pipe(sassVars({
               $useClassic: argv.classic
             }))
    .pipe(sass({style: 'expanded'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('sticky.css'))
    .pipe(header(banner, header_opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build']);
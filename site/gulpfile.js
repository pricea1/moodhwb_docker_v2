'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var prefix = require('gulp-autoprefixer');

sass.compiler = require('node-sass');
 
function compassCompile(){
	return gulp.src( ['./src/sass/*.scss'], {base: './src/sass/'} )
		.pipe(compass({
				config_file: './config.rb',
				css: 'src/css',
				sass: 'src/sass'
		})).on('error', function(err) {
				console.log(err);
		})
		.pipe( prefix("last 3 version") )
		.pipe( gulp.dest('web/resources/css')
	);
}

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', { interval: 500 }, gulp.series(compassCompile));
});
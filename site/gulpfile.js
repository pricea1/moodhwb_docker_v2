'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var prefix = require('gulp-autoprefixer');
var usemin = require('gulp-usemin');
var del = require('del');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-handlebars');
var wrap = require("gulp-wrap");
var declare = require('gulp-declare');
var concat = require('gulp-concat');

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
		.pipe( gulp.dest('src/css')
	);
}

function hbtemplatesCompile(){
  return gulp.src('./src/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'opad.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('hb-templates.js'))
    .pipe(gulp.dest('./src/js/'));
}

function moveTemplates(){
	//Move
	return gulp.src(['./src/templates/**/*'])
	.pipe(gulp.dest('./templates'));
}

function moveImages () {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./web/resources/images'));

}

function moveFonts() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./web/resources/fonts'));

}

function minify() {
	gulp.src(['.src/js/feature-block/**'])
	.pipe(gulp.dest('./web/resources/js/feature-block/'));

	return gulp.src(['./src/templates/_layout.html'])
	.pipe(usemin({
		assetsDir: 'src',
		js: [uglify()],
		bower: [uglify()]
	}))
	.pipe(gulp.dest('./web/'));
}

function moveIndexTemplate(){
	gulp.src(['./web/_layout.html'])
	.pipe(gulp.dest('./templates'));
	
	return del('./web/_layout.html');
}

function watch() {

	livereload.listen();
	
	gulp.watch('./src/css/**/*.css', { delay: 500 }).on('change', function(file) {

		return gulp.src([file])
		.pipe( gulp.dest("./web/resources/css"))
		.pipe(livereload());
	});

	gulp.watch('./src/sass/**/*.scss', { delay: 500 }, gulp.series(compassCompile, minify, moveIndexTemplate));

	gulp.watch(['./src/templates/**/*', '!src/templates/_layout.html', '!src/templates/**/*.hbs'], { delay: 500 }).on('change', function(file) {

		var destFile = file.replace('src', '.');
		var folder = destFile.split('/');
		folder.pop();
		var destFolder = folder.join("/");
console.log('move ' + file + " to " + destFolder);
		return gulp.src([file])
		.pipe( gulp.dest(destFolder));
	});

	gulp.watch(['./src/js/**/*.js','src/templates/_layout.html'], { delay: 500 }, gulp.series(minify, moveIndexTemplate));

	gulp.watch('./src/templates/**/*.hbs', { delay: 500 }, gulp.series(hbtemplatesCompile, minify));

//	gulp.watch('app/resources/bower_components/**/*.js', { interval: 500 }, ['bower']);

}

gulp.task('build', gulp.series(compassCompile, moveTemplates, moveImages, moveFonts, hbtemplatesCompile, minify, moveIndexTemplate));
gulp.task(watch);
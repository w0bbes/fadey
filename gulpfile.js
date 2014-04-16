var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch'),
	clean = require('gulp-clean'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	minify = require('gulp-minify-css'),
	livereload = require('gulp-livereload');

var tasks = [
	'scripts',
	'stylesheets',
	'documents'
];

var paths = {
	scripts: [
		'js/main.js',
		'js/jquery.fadey.js'
	],
	stylesheets: [
		'less/style.less'
	],
	documents: [
		'index.html'
	]
};

gulp.task('scripts', function() {
	gulp.src(paths.scripts).pipe(watch(function(files) {
		return files.pipe(plumber())
			.pipe(uglify())
			.pipe(rename({
				extname: '.js',
				suffix: '.min'
			}))
			.pipe(gulp.dest('js'))
			.pipe(livereload());
	}));
});

gulp.task('stylesheets', function() {
	gulp.src(paths.stylesheets).pipe(watch(function(files) {
		return files.pipe(plumber())
			.pipe(less())
			.pipe(minify())
			.pipe(rename({
				extname: '.css',
				suffix: '.min'
			}))
			.pipe(gulp.dest('css'))
			.pipe(livereload());
	}));
});

gulp.task('documents', function() {
	gulp.src(paths.documents).pipe(watch(function(files) {
		return files.pipe(plumber())
			.pipe(livereload());
	}));
});

gulp.task('default', tasks);
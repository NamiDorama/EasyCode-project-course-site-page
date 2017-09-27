var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglifyjs = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	del = require('del');



gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(autoprefixer({browsers: ['last 15 versions']}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

gulp.task('watch',['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass'])
	gulp.watch('app/*.html', browserSync.reload)
	gulp.watch('app/js/**/*.js', browserSync.reload)
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('js', function(){
	return gulp.src(['app/libs/owl-carousel/owl-carousel/owl.carousel.js',
					 'app/libs/magnific-popup/dist/jquery.magnific-popup.js'])
			.pipe(concat('libs.min.js'))
			.pipe(uglifyjs())
			.pipe(gulp.dest('app/js'))
});

gulp.task('css', function(){
	return gulp.src('app/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'))
});

gulp.task('build', ['clean'], function(){

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))

	var buildCss = gulp.src(['!app/css/libs.css',
							'app/css/**/*.css'])
		.pipe(gulp.dest('dist/css'))

	var buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', function(){
	return del.sync('dist')
});
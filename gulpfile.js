var gulp 	 	 = require('gulp'),
	sassToCss 	 = require('gulp-sass'),
	concat       = require("gulp-concat"),
	cleanCSS 	 = require('gulp-clean-css'),
	autoprefixer = require("gulp-autoprefixer"),
	rename       = require("gulp-rename"),
	browserSync  = require('browser-sync').create(),
	sourcemaps   = require('gulp-sourcemaps'),
	cssnano 	 = require('gulp-cssnano');

//Compile CSS file from Sass
gulp.task('compileSass', function(){
	return gulp.src(['src/sass/**/*.{sass,scss}'])
	.pipe(sourcemaps.init())
	.pipe(sassToCss({outputStyle: 'expanded'}).on('error', sassToCss.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('src/css'))
	.pipe(cleanCSS())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .on('error', function (err) {
            console.error('Error!', err.message);
        })
    .pipe(sourcemaps.write())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('code', function(){
	return gulp.src([
			'src/**/*.{php, html}'
		])
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
    browserSync.init({
        watch: true,
    	server: "./src/"
    });
});


// Watch
gulp.task('watch', gulp.parallel('code', 'compileSass','browserSync', function startWatching(){
	gulp.watch('src/sass/**/*.{css,sass,scss}', gulp.parallel('compileSass'));
	gulp.watch('src/**/*.{php,html}', gulp.parallel('code')).on('change', browserSync.reload);
}));

// Default Gulp function
gulp.task('default', gulp.parallel('watch'));
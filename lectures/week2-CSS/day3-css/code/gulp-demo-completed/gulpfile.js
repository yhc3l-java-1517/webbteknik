var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
  })
});

gulp.task('css', function(){
  return gulp.src(['public/src/css/reset.css', 'public/src/css/stylesheet.css', 'public/src/css/mediaqueries.css'])
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(concat('all.css'))
    .pipe(cleanCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('javascript', function(){
  return gulp.src(['public/src/js/script.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('html', function(){
  return browserSync.reload();
});


gulp.task('watch', ['browserSync', 'css', 'javascript'], function() {
  gulp.watch('public/src/css/*.css', ['css']);
  gulp.watch('public/src/js/*.js', ['javascript']);
  gulp.watch('public/**/*.html', ['html']);
});

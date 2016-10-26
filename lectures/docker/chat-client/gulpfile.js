/* eslint import/no-extraneous-dependencies: ["off", {"devDependencies": false}] */

const gulp = require('gulp');
const browserify = require('browserify');
const server = require('gulp-server-livereload');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('webserver', () => {
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('css', () =>
  gulp.src(['./src/css/bootstrap-slate.css', './src/css/default.css'])
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('master.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/css'))
);

gulp.task('html', () => gulp.src('./src/**/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('./dist'))
);

gulp.task('javascript', () => browserify('./src/js/app.js', {
  debug: true
})
  .transform(babelify)
  .bundle()
  .pipe(source('chat.bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js'))
);

gulp.task('default', ['webserver', 'html', 'css', 'javascript'], () => {
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./src/js/**/*.js*', ['javascript']);
  gulp.watch('./src/**/*.html', ['html']);
});

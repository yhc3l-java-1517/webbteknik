/* eslint import/no-extraneous-dependencies: ["off", {"devDependencies": false}] */

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () =>
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
);

gulp.task('sass', () => gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/css'))
);

gulp.task('css', () =>
  gulp.src(['./src/css/bootstrap-slate.css', './src/css/default.css'])
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('master.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('html', () => gulp.src('./src/**/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('javascript', () => browserify('./src/js/app.js', {
  debug: true
})
  .transform(babelify)
  .bundle()
  .pipe(source('todo.bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
);

gulp.task('default', ['browserSync', 'html', 'css', 'javascript'], () => {
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js*', ['javascript']);
  gulp.watch('./src/**/*.html', ['html']);
});

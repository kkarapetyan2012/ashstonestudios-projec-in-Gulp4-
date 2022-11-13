const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const uglify = require('gulp-uglify');

const paths = {
  html: {
    src: ['src/*.html', 'src/*.htm', 'src/*.pug'],
    dest: 'dist/'
  },
  styles: {
    src: ['src/styles/**/*.sass', 'src/styles/**/*.scss', 'src/styles/**/*.styl', 'src/styles/**/*.less', 'src/styles/**/*.css'],
    dest: 'dist/css/'
  },
  js: {
    src: ['src/js/**/*.coffee', 'src/js/**/*.ts', 'src/js/**/*.js'],
    dest: 'dist/js/'
  },
  images: {
    src: 'src/img/**',
    dest: 'dist/img/'
  },
  fonts: {
    src: 'src/font/**',
    dest: 'dist/font/'
  }
}

function html() {
  return gulp.src(paths.html.src)
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browsersync.stream())
}

function styles() {
  return gulp.src(paths.styles.src)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(browsersync.stream())
}

function js() {
  return gulp.src(paths.js.src)
  .pipe(uglify())
  .pipe(gulp.dest(paths.js.dest))
  .pipe(browsersync.stream())
}

function img() {
    return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
}

function font() {
  return gulp.src(paths.fonts.src)
  .pipe(gulp.dest(paths.fonts.dest))
}

function watch() {
  browsersync.init({
    server: {
        baseDir: "./dist"
    }
  })
  gulp.watch(paths.html.dest).on('change', browsersync.reload)
  gulp.watch(paths.html.src, html)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.js.src, js)
  gulp.watch(paths.images.src, img)
  gulp.watch(paths.fonts.src, font)
}

exports.html = html
exports.styles = styles
exports.js = js
exports.img = img
exports.font = font
exports.watch = watch

exports.default = gulp.series(html, gulp.parallel(styles, js, img, font), watch)
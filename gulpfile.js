const gulp = require('gulp');
const size = require('gulp-size');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const adjustMQ = require('postcss-sort-media-queries')

function copySass(callback) {
    gulp.src('./src/agrid/scss/**/*.scss')
        // .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist/scss'));

    callback();
}

function cssminify(callback) {
    gulp.src('./src/agrid/scss/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist'))
        .pipe(postcss([autoprefixer(), adjustMQ()]))
        .pipe(csso())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist'));

    callback();
}

exports.build = gulp.series(copySass, cssminify);
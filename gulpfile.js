const gulp = require('gulp');
const size = require('gulp-size');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');

function copySass(callback) {
    gulp.src('./src/agrid/scss/*.scss')
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist/scss'));

    callback();
}

function cssminify(callback) {
    gulp.src('./src/agrid/scss/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist'))
        .pipe(postcss([autoprefixer(), cssnano({
            preset: ['advanced', { zindex: false, discardComments: { removeAll: true } }]
        })]))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist'));

    callback();
}

exports.build = gulp.series(copySass, cssminify);
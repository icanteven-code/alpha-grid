const gulp = require('gulp');
const size = require('gulp-size');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const adjustMQ = require('postcss-sort-media-queries');
const gzip = require('gulp-gzip');
const gulpBrotli = require('gulp-brotli');
const zlib = require('zlib');
var replace = require('gulp-replace');

function cloneSASS(callback) {
    gulp.src('./src/agrid/scss/**/*.scss')
        .pipe(gulp.dest('./dist/scss'));

    callback();
}

function buildCSS(callback) {
    gulp.src('./src/agrid/scss/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(size({ showFiles: true }))
        .pipe(postcss([autoprefixer(), adjustMQ()]))
        .pipe(csso())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('./dist'))

    callback();
}

function compressGZ(callback) {
    gulp.src('./dist/*.min.css')
        .pipe(gzip())
        .pipe(gulp.dest('./dist'));

    callback();
}
function compressBR(callback) {
    const brotliOpts = {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
        },
    }
    gulp.src('./dist/*.min.css')
        .pipe(gulpBrotli.compress(brotliOpts))
        .pipe(gulp.dest('./dist'));
    callback();
}

exports.build = gulp.series(cloneSASS, buildCSS);
exports.compress = gulp.parallel(compressGZ, compressBR)


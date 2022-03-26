const gulp = require('gulp');

const autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano');

function autoprefix() {
    return gulp.src('./dist/agrid.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            autoprefixer({ grid: true }),
            cssnano({
                preset: ['advanced', { zindex: false, discardComments: { removeAll: true } }]
            })
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
}

exports.default = gulp.series(autoprefix);
  
const sass = require('gulp-sass');
const gulp = require('gulp')
const {watch} = require('gulp')
const imagemin = require('gulp-imagemin');

function cssTask() {
        return gulp.src('./src/scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./dist/css'))
}

exports.watchTask = function () {
    watch('./src/scss/**/*.scss', cssTask)
}

exports.imgTask = () => (
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
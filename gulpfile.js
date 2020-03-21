const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function () {
    return gulp.src('src/assets/js/index.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    return gulp.src('src/assets/css/main.scss')
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('watch', function() {
    gulp.watch('src/assets/js/index.js', gulp.series('scripts'));
    gulp.watch('src/assets/css/main.scss', gulp.series('styles'));
});
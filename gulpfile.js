//导入模块
let gulp = require('gulp');
let concat = require('gulp-concat');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let sass = require('gulp-sass');

//发布任务
function fnJS(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'))
}

function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}

function fnCopyIndex(){
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
}

function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/*.html',fnCopyIndex);
}
//导出任务
exports.js = fnJS;
exports.css = fnSass;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.default = fnWatch;
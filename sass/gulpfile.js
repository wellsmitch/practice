var gulp        = require('gulp');
var connect        = require('gulp-connect');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
// var prefix      = require('gulp-autoprefixer');
var reload      = browserSync.reload;

var Asset = {
    html: './**.html',
    js: './**.js',
    sass: './*.scss',
};
// 静态服务器 + 监听 scss/html 文件
gulp.task('server', function() {
    browserSync.init({
        server: "."
    });

});
// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src('./*.scss')
        //outputStyle控制css样式输出风格nested   expanded  compact  compressed
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
//监听
gulp.task('watch', function(){
    connect.server({
        livereload:false
    });
    gulp.watch("./*.scss",  function () {
        gulp.src('./*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });
    // gulp.watch("Asset.js", reload);
    // gulp.watch("Asset.sass", ['sass'], reload);
    // gulp.watch("Asset.images", reload);
});
// 默认
gulp.task('default', ['sass','watch']);
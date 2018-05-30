const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

gulp.task('sass',function(){
	gulp.src('sass/*.scss').pipe(sass()).pipe(cssnano()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('css'));
});
gulp.task('default',function(){
	gulp.watch('sass/*scss',['sass']);
})

var gulp = require('gulp');
var acss = require('gulp-atomizer');

gulp.task('acss', function () {
	return gulp
		.src('./**/*.njk')
		.pipe(acss())
		.pipe(gulp.dest('./css/'))
})

gulp.task('default', function() {
	gulp.watch('./**/*.njk', gulp.series('acss'));
})

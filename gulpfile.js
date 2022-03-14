var gulp = require('gulp');
var acss = require('gulp-atomizer');

gulp.task('acss', function () {
	return gulp
		.src('_site/**/*.html')
		.pipe(acss({
			acssConfig: require('./css/config.js')
		}))
		.pipe(gulp.dest('_site/css/'))
})

gulp.task('default', function() {
	gulp.watch('_site/**/*.html', gulp.series('acss'));
})

const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task('clean', () =>  {
    return del(['dist/']);
});

gulp.task('static', () => {
    return gulp.src(['src/**/*.json']).pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], gulp.series('clean', 'static', 'build'));
});

gulp.task('default', gulp.series('clean', 'static', 'build','watch'));
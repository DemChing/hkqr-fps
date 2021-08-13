const gulp = require('gulp');
const del = require('del');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');
const typedoc = require('gulp-typedoc');

gulp.task('clean:cjs', () => {
    return del('dist/cjs');
})

gulp.task('clean:esm', () => {
    return del('dist/esm');
})

gulp.task('clean:webpack', () => {
    return del('dist/webpack');
})

gulp.task('clean:doc', () => {
    return del('docs');
})

gulp.task('compile:cjs', () => {
    const sourcemaps = require('gulp-sourcemaps');
    const tsProject = require('gulp-typescript')
        .createProject('tsconfig.json');
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '../../src'
        }))
        .pipe(gulp.dest('dist/cjs'));
})

gulp.task('build:cjs', gulp.series('clean:cjs', 'compile:cjs'))

gulp.task('compile:esm', () => {
    const sourcemaps = require('gulp-sourcemaps');
    const tsProject = require('gulp-typescript')
        .createProject('tsconfig.json', {
            module: 'es6'
        });
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '../../src'
        }))
        .pipe(gulp.dest('dist/esm'));
})

gulp.task('build:esm', gulp.series('clean:esm', 'compile:esm'))

gulp.task('build:webpack', gulp.series('clean:webpack', () => {
    return gulp.src('src/index.ts')
        .pipe(webpack({
            ...require('./webpack.config'),
            mode: 'production'
        }))
        .pipe(gulp.dest('dist/webpack'));
}))

gulp.task('build:doc', gulp.series('clean:doc', () => {
    return gulp.src('src/*.ts')
        .pipe(typedoc(require('./typedoc.json')));
}))

gulp.task('build', gulp.series(
    gulp.parallel('build:esm', 'build:cjs'),
    gulp.parallel('build:webpack', 'build:doc'),
))
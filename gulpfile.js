const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');
const typedoc = require('gulp-typedoc');

gulp.task('build:cjs', () => {
    const sourcemaps = require('gulp-sourcemaps');
    const tsProject = require('gulp-typescript')
        .createProject('tsconfig.json');
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '../../src'
        }))
        .pipe(gulp.dest('dist/cjs'));
})

gulp.task('build:esm', () => {
    const sourcemaps = require('gulp-sourcemaps');
    const tsProject = require('gulp-typescript')
        .createProject('tsconfig.json', {
            module: 'es6'
        });
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '../../src'
        }))
        .pipe(gulp.dest('dist/esm'));
})

gulp.task('minify', () => {
    return gulp.src(['dist/**/*.js', '!dist/webpack/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task('build:webpack', () => {
    return gulp.src('src/index.ts')
        .pipe(webpack({
            ...require('./webpack.config'),
            mode: 'production'
        }))
        .pipe(gulp.dest('dist/webpack'));
})

gulp.task('build:doc', () => {
    return gulp.src('src/*.ts')
        .pipe(typedoc(require('./typedoc.json')));
})

gulp.task('build', gulp.series(
    gulp.parallel('build:esm', 'build:cjs'),
    gulp.parallel('minify', 'build:webpack', 'build:doc'),
))
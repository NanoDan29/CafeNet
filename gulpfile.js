const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css');

gulp.task('sass', () => {

    let path  = './scss/*.scss'

    gulp.watch(path, () => {
        return new Promise( resolve => {
            gulp.src(path)
                .pipe(sass({
                    outputStyle: 'compact',
                    sourceComments: true
                }))
                .pipe(autoprefix({
                    browsers: ['last 2 versions'],
                    cascade: false
        
                }))
                .pipe( minify() )
                .pipe(gulp.dest('./css'))
                resolve('this value is ignored')
        })
    })
})


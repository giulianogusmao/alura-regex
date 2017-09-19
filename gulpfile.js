// npm install --save-dev gulp browser-sync

const gulp = require('gulp')
    , browserSync = require('browser-sync').create()
    , reload = browserSync.reload;

let path = {
    origin: './src/',
    deploy: './dist/'
};

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: path.origin,
        }
    });

    gulp.watch(`${path.origin}/**/*.+(html|js)`).on('change', reload);
});

gulp.task('default', () => gulp.start(
    'server'
));

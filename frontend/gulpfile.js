var gulp = require('gulp'),
    touch = require('gulp-touch-fd'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),

    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),

    webpackStream = require('webpack-stream'),

    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

var sourcesPath = './sources';
var assetsPath = './assets';

var pages = [];

gulp.task('style', function(done) {

    function style(fileName) {
        gulp.src(sourcesPath + '/style/'+fileName+'.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(sourcemaps.write('map'))
            .pipe(gulp.dest(assetsPath))
            .pipe(touch());
    }
    style('base');
    style('global');
    pages.map(function(page){
        style('page-'+page);
    });

    done();
});

gulp.task('js', function(done) {

    function script(fileName){
        gulp.src(sourcesPath + '/js/'+fileName+'.js')
            .pipe(webpackStream({
                mode: 'development',
                output: {
                    filename: fileName+'.js'
                },
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: ['@babel/preset-env']
                                }
                            }
                        }
                    ]
                }
            }))
            .on('error', function handleError() { this.emit('end'); })
            .pipe(gulp.dest(assetsPath))
            .pipe(touch());
    }
    script('base');
    script('global');
    pages.map(function(page){
        script('page-'+page);
    });

    done();
});

gulp.task('svg-sprites', function (done) {
    gulp.src(sourcesPath + '/svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                inline: true,
                symbol: {
                    sprite: '../svg-symbols.svg',
                }
            }
        }))
        .pipe(replace('<?xml version="1.0" encoding="utf-8"?>', ''))
        .pipe(gulp.dest(assetsPath))
        .pipe(touch());
    done();
});

gulp.task('serve', function(done) {
    browserSync.init({
        proxy: "street-21-localhost.ru/h",
        reloadDelay: 1000,
        notify: false
    });
    done();
});

gulp.task('default', gulp.series('style', 'js', 'svg-sprites'));

gulp.task('watch', gulp.series('style', 'js', 'svg-sprites', function(done) {
    gulp.watch([sourcesPath + '/**/*.scss', sourcesPath + '/**/*.css'], gulp.series('style'));
    gulp.watch([sourcesPath + '/**/*.js'], gulp.series('js'));
    gulp.watch(sourcesPath + '/svg/**/*.svg', gulp.series('svg-sprites'));
    done();
}));

gulp.task('live', gulp.series('style', 'js', 'svg-sprites', 'serve', function(done) {
    gulp.watch([sourcesPath + '/**/*.scss', sourcesPath + '/**/*.css'], gulp.series('style')).on('change', browserSync.reload);
    gulp.watch([sourcesPath + '/**/*.js'], gulp.series('js')).on('change', browserSync.reload);
    gulp.watch(['../h/**/*.php']).on('change', browserSync.reload);
    gulp.watch(sourcesPath + '/svg/**/*.svg', gulp.series('svg-sprites')).on('change', browserSync.reload);
    done();
}));
var gulp = require('gulp'),
plumber = require('gulp-plumber'),
  newer = require('gulp-newer'),
  debug = require('gulp-debug');
  imagemin = require('gulp-imagemin'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  imageminPngquant = require('imagemin-pngquant'),

  exports.default = () => (
    gulp.src('src/**/*')
    .pipe(newer('dist'))
    .pipe(plumber())
    .pipe(imagemin([
      imageminJpegRecompress({
        progressive: true,
        min: 70,
        max: 75
      }),
      imageminPngquant({quality: [0.7, 0.75]})
    ]))
    .pipe(debug({
      title: 'Processing',
      showCount: false
    }))
    .pipe(gulp.dest('dist'))
  );

import gulp from 'gulp';
import imagemin from 'imagemin';

function imageSquash(){
  return gulp
    .src('assets/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/minified'));
}

gulp.task('imageSquash', imageSquash);

export default gulp.series('imageSquash')

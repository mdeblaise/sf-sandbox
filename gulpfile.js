// Requis
var gulp = require('gulp');

//Include (plugins)
var del = require('del');
// Variables de chemins
var source = './src'; // dossier de travail
var destination = './web/dist'; // dossier à livrer

/********
ADMIN LTE
********/
gulp.task('AdminLTE.bootstrap', function () {
  return gulp.src('bower_components/AdminLTE/bootstrap/**')
    /* ici les plugins Gulp à exécuter */
    .pipe(gulp.dest(destination+'/AdminLTE/bootstrap'));
});

gulp.task('AdminLTE.dist', function () {
  return gulp.src('bower_components/AdminLTE/dist/**')
    /* ici les plugins Gulp à exécuter */
    .pipe(gulp.dest(destination+'/AdminLTE/dist'));
});

gulp.task('AdminLTE.plugins', function () {
  return gulp.src('bower_components/AdminLTE/plugins/**')
    /* ici les plugins Gulp à exécuter */
    .pipe(gulp.dest(destination+'/AdminLTE/plugins'));
});

gulp.task('default', ['clean'], function() {
   gulp.start('AdminLTE.bootstrap');
   gulp.start('AdminLTE.dist');
   gulp.start('AdminLTE.plugins');
});

gulp.task('clean', function() {
   return del([destination], {force: true});
});
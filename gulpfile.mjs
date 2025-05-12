import gulp from 'gulp'
import html from './gulp/tasks/html.mjs'
import styles from './gulp/tasks/styles.mjs'
import scripts from './gulp/tasks/scripts.mjs'
import cleanDist from './gulp/tasks/cleanDist.mjs'
import fonts, { fontsSvg } from './gulp/tasks/fonts.mjs'
import images, { imagesAvif, imagesWebp, imagesSvg } from './gulp/tasks/images.mjs'
import favicon from './gulp/tasks/favicon.mjs'
import server from './gulp/tasks/server.mjs'
import watcher from './gulp/tasks/watcher.mjs'

// Регистрация отдельных тасков для CLI
gulp.task('cleanDist', cleanDist)
gulp.task('html', html)
gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('fonts', fonts)
gulp.task('fontsSvg', fontsSvg)
gulp.task('images', images)
gulp.task('imagesAvif', imagesAvif)
gulp.task('imagesWebp', imagesWebp)
gulp.task('imagesSvg', imagesSvg)
gulp.task('favicon', favicon)
gulp.task('server', server)
gulp.task('watcher', watcher)

// Дефолтный таск для разработки
// …предыдущие registration тасков…

// Дефолтный таск для разработки
gulp.task('default', gulp.series(
  'cleanDist',
  gulp.parallel(
    'html',
    'styles',
    'scripts',
    'fonts',
    'imagesSvg',
    'favicon'
  ),
  gulp.parallel(
    'server',
    'watcher'
  )
));


// Таск сборки для продакшена
gulp.task('build', gulp.series(
  'cleanDist',
  gulp.parallel('html', 'styles', 'scripts', 'fonts', 'fontsSvg', 'images', 'imagesWebp', 'imagesAvif', 'imagesSvg', 'favicon')
))

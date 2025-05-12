import gulp from 'gulp';
import html from './html.mjs';
import styles from './styles.mjs';
import scripts from './scripts.mjs';
import files from './files.mjs';
import { imagesAvif, imagesSvg } from './images.mjs';
import { paths } from '../config.mjs';
import { serverBS } from './server.mjs';

const watcher = () => {
  // Только .jpg/.jpeg/.png для imagesAvif
  gulp.watch(paths.watch.html, html).on('change', serverBS.reload);
  gulp.watch(paths.watch.styles, styles).on('change', serverBS.reload);
  gulp.watch(paths.watch.scripts, scripts).on('change', serverBS.reload);
  gulp.watch(paths.watch.files, files).on('change', serverBS.reload);

  // Фильтруем только изображения для AVIF
  gulp.watch(
    ['src/img/**/*.{jpg,jpeg,png}', '!src/img/**/*.svg'], // Только .jpg/.jpeg/.png
    gulp.parallel(imagesAvif, imagesSvg)
  ).on('change', serverBS.reload);

  return; // Завершаем задачу
};

export default watcher;
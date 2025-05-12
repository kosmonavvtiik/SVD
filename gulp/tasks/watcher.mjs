import gulp from 'gulp';
import html from './html.mjs';
import styles from './styles.mjs';
import scripts from './scripts.mjs';
import files from './files.mjs';
import images, { imagesAvif, imagesWebp, imagesSvg } from './images.mjs';
import fonts, { fontsSvg } from './fonts.mjs';
import favicon from './favicon.mjs';
import { paths } from '../config.mjs';
import { serverBS } from './server.mjs';

// Задача наблюдения за изменениями файлов
export default function watcher(done) {
  // HTML
  gulp.watch(paths.watch.html, html).on('change', serverBS.reload);
  // Стили
  gulp.watch(paths.watch.styles, styles).on('change', serverBS.reload);
  // Скрипты
  gulp.watch(paths.watch.scripts, scripts).on('change', serverBS.reload);
  // Прочие файлы
  gulp.watch(paths.watch.files, files).on('change', serverBS.reload);

  // Растровые изображения (JPEG, PNG, GIF)
  gulp.watch(`${paths.src.images}/**/*.{jpg,jpeg,png,gif}`, images).on('change', serverBS.reload);
  // WebP
  gulp.watch(`${paths.src.images}/**/*.{jpg,jpeg,png}`, imagesWebp).on('change', serverBS.reload);
  // AVIF (только JPEG/PNG)
  gulp.watch([
    `${paths.src.images}/**/*.{jpg,jpeg,png}`,
    `!${paths.src.images}/**/*.svg`
  ], imagesAvif).on('change', serverBS.reload);
  // SVG
  gulp.watch(`${paths.src.images}/**/*.svg`, imagesSvg).on('change', serverBS.reload);

  // Шрифты и SVG иконки шрифтов
  gulp.watch(`${paths.src.fonts}/**/*`, fonts).on('change', serverBS.reload);
  gulp.watch(`${paths.src.fonts}/**/*.svg`, fontsSvg).on('change', serverBS.reload);

  // Favicon
  gulp.watch(`${paths.src.favicon}/**/*`, favicon).on('change', serverBS.reload);

  done(); // Сигнализируем Gulp, что слежка настроена
}

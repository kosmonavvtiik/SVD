import gulp from 'gulp'
import changed from 'gulp-changed'
import imagemin from 'gulp-imagemin'
import imageminAvif from 'imagemin-avif'
import webp from 'gulp-webp'
import { paths } from '../config.mjs'

// 1) Обычные растровые (JPEG, PNG, GIF)
export const images = () => {
  return gulp
    .src(`${paths.src.images}/**/*.{jpg,jpeg,png,gif}`)
    .pipe(changed(paths.dist.images))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest(paths.dist.images))
}

// 2) WebP
export const imagesWebp = () => {
  return gulp
    .src(`${paths.src.images}/**/*.{jpg,jpeg,png,gif}`)
    .pipe(changed(paths.dist.images))
    .pipe(webp())
    .pipe(gulp.dest(paths.dist.images))
}

// 3) AVIF через imagemin-avif
export const imagesAvif = () => {
  return gulp
    .src([
      `${paths.src.images}/**/*.{jpg,jpeg,png}`,   // только эти форматы
      `!${paths.src.images}/fonts/**`,             // исключаем шрифты
      `!${paths.src.images}/icons/**`              // исключаем иконки
    ])
    .pipe(changed(paths.dist.images))
    .pipe(imagemin([
      imageminAvif({ quality: 80 })
    ], { verbose: true }))
    .pipe(gulp.dest(paths.dist.images))
}

// 4) SVG
export const imagesSvg = () => {
  return gulp
    .src(`${paths.src.images}/**/*.svg`)
    .pipe(changed(paths.dist.images))
    .pipe(gulp.dest(paths.dist.images))
}

// Для CLI-импорта по умолчанию
export default images

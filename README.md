# curso_ebac_frontend
Cusro EBAC frontend
- Exercício gulp

// instalação do gulp
npm install --global gulp-cli

// iniciar projeto
npm init 
npm install --save-dev gulp

// script gulp
gulp

gulpfile.js

const gulp = require('gulp');
exports.default = gulp.series(funcao1, funcao2)
npm run gulp

exports.default = gulp.parallel(funcao1, funcao2)

# aula 16.5

const sass = require('gulp-sass')(require('sass'))

const sourcemaps = require('gulp-sourcemaps')

function compilaSass() {
  return gulp.src('./source/syles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles')
}


exports.sass = compiaSass
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', 
    { ignoreInitial: false },
    gulp.series(compilaSass))
}

# aula 16.6

npm install --save-dev gulp-uglify
npm install --save-dev gulp-obfuscate
npm install --save-dev gulp-imagemin@7.1.0

const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavasScript() {
   return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

exports.javascript = compimeJavaScript

export.images = comprimeImagens

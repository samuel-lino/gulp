const g = require('gulp')
const min = require('gulp-cssmin')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const jscript = require('gulp-uglify')
const imagens = require('gulp-image')

function tarefascss(cb){

    return g.src(['./node_modules/bootstrap/dist/css/bootstrap.css',
                    './node_modules/font-awesome/css/font-awesome.css',
                    './vendor/owl/css/owl.css',
                    './vendor/jquery-ui/jquery-ui.css',
                    './assets/css/style.css',
                ])
                .pipe(concat('libs.css'))
                .pipe(min())
                .pipe(rename({suffix: '.min'}))
                .pipe(g.dest('./dist/css'))
}

function tarefasjs(cb){

    return g.src(['./node_modules/jquery/dist/jquery.js',
                './node_modules/bootstrap/dist/js/bootstrap.js',
                './vendor/owl/js/owl.js',
                './vendor/jquery-mask/jquery.mask.js',
                './vendor/jquery-ui/jquery-ui.js',
                './assets/js/custom.js'])
                .pipe(concat('libs.js'))
                .pipe(jscript())
                .pipe(rename({suffix: '.min'}))
                .pipe(g.dest('./dist/js'))
}


function tarefasimage(cb){

    return g.src('./assets/images/*')
                .pipe(imagens({
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: false,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true,
                    concurrent: 10,
                    quiet: true
                }))
                .pipe(g.dest('./dist/images'))
}

exports.estilo = tarefascss
exports.script = tarefasjs
exports.images = tarefasimage
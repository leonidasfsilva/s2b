let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'resources/assets/js/app.js',
    'resources/assets/js/jquery-3.5.1.js',
    'resources/assets/js/bootstrap4.0.0.js',
], 'public/js/app.js');

mix.sass('resources/assets/sass/app.scss', 'public/css');

/**
 * CSS Site
 */
mix.styles([
    'resources/assets/css/bootstrap4.0.0.css',
    'resources/assets/css/custom.css',
], 'public/css/style.css');


mix.browserSync('http://localhost/s2b/public')

Angular Material Starter
========================

Essential Starter for your Angular Material App:

  - npm + webpack + angular-material

  - Not need jQuery + Not need Bootstrap

Demo
====

  - https://rawgit.com/josoroma/Angular-Material-Starter/master/dist/index.html

Why?
====

  - `npm` is THE package manager.

  - `Webpack` is a flexible beast, just `require/import` anything we need and we're done.

It's up to you
==============

Please feel free to extend this Starter with your own `Toolbar Button Actions`, `Pages`, controllers, services, factories, directives, filters, contants, events, routes, templates, forms and `Section Contents`. Yes, in fact there are 4 major `Section Contents` to play with, these are:

  - section-image
  - section-articles
  - section-video
  - section-contact

Since both the `section-image` and the `section-video` are in the background or below a suitable CSS Depth, we are able to overlap this `Content` with our custom assets such as text, images, forms, buttons or anything we want.

Service Example: We can enable a `Service` able to respond back with business locations, for example, useful to display Google Map Markers of all the for rent houses located within a 10 km radius of our current geo-location.

Using npm as a build tool
=========================

## --save-dev

 ```
npm install webpack webpack-dev-server autoprefixer-loader babel-core babel-loader ng-cache-loader raw-loader file-loader image-webpack-loader json-loader less less-loader style-loader css-loader url-loader clean-webpack-plugin html-webpack-plugin extract-text-webpack-plugin ng-annotate ng-annotate-loader --save-dev
 ```

## --save

```
npm install \
angular-material \
angular-route  \
angular-sanitize \
angular-animate \
ngmap \
ng-onload \
angular-inview \
--save
```

Cli
===

[npm scripts] are enough to automate all our tasks:

  - Run Development Server on port `8888`:

```
npm run start
```

  - Create Project in `./dist` folder:

```
npm run build
```

Inspect
=======

  - chrome http://0.0.0.0:8888

Reference
=========

  - [JavaScript - Style Guide](https://github.com/airbnb/javascript)

  - [John Papa - Angular Style Guide](https://github.com/johnpapa/angular-styleguide)

  - [Angular Hot Towel](https://github.com/johnpapa/HotTowel-Angular)

  - [Todd Motto - Angular Style Guide](https://github.com/toddmotto/angularjs-styleguide)

Other Awesome Angular Modules
=============================

  - [ngFx](https://github.com/Hendrixer/ngFx)

  - [RESTangular](https://github.com/mgonto/restangular)

  - [ApiMock](https://github.com/seriema/angular-apimock)

  - [Formly](http://docs.angular-formly.com)

  - [ngStorage](https://github.com/gsklee/ngStorage)

  - [JWT](https://www.npmjs.com/package/angular-jwt)

  - [Scroll](https://github.com/oblador/angular-scroll)

  - [ngInfiniteScroll](http://binarymuse.github.io/ngInfiniteScroll)

  - [Headroom](http://wicky.nillia.ms/headroom.js)

  - [Flippy](https://github.com/zwacky/angular-flippy)

(function() {
  'use strict';

  angular.module('pageHome')
  .run(run);

  /*@ngInject*/
  function run($templateCache) {
    var template;

    template = require('home/www/partials/index.html');
    $templateCache.put('pageHome.html', template);

    template = require('home/www/partials/contact.html');
    $templateCache.put('contact.html', template);
  }
})();

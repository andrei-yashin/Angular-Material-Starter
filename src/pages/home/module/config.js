(function() {
  'use strict';

  angular.module('pageHome')
  .config(config);

  /*@ngInject*/
  function config($routeProvider) {
    $routeProvider.when('/home', {
      controller: 'pageHomeCtrl',
      controllerAs: 'pageHome',
      templateUrl: 'pageHome.html'
    });
  }
})();

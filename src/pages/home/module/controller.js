(function() {
  'use strict';

  angular.module('pageHome')
  .controller('pageHomeCtrl', pageHomeCtrl);

  /*@ngInject*/
  function pageHomeCtrl($scope, $timeout) {
    var self = this;

    self.articles = [
      {
        img: 'https://raw.githubusercontent.com/josoroma/Angular-Material-Starter/master/src/pages/home/www/img/articles/01.jpg',
        slogan: 'Enjoy experiences'
      },
      {
        img: 'https://raw.githubusercontent.com/josoroma/Angular-Material-Starter/master/src/pages/home/www/img/articles/02.jpg',
        slogan: 'Talk to yourself'
      },
      {
        img: 'https://raw.githubusercontent.com/josoroma/Angular-Material-Starter/master/src/pages/home/www/img/articles/03.jpg',
        slogan: 'Hang out with friends'
      }
    ];

    $scope.$on('mapInitialized', function(evt, evtMap) {
      self.map = evtMap;
      self.marker = self.map.markers[0];
      self.infoWindow = self.map.infoWindows[1];
    });

    // Private

    var centerChanged = function(event) {
      $timeout(function() {
        self.map.panTo(self.infoWindow.getPosition());
      }, 2000);
    }

    var click = function(event) {
      self.map.setZoom(8);
      self.map.setCenter(infoWindow.getPosition());
    }

    // Public

    this.centerChanged = centerChanged;
    this.click = click;
  }
})();

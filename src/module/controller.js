(function() {
  'use strict';

  angular.module('module')
  .controller('moduleCtrl', moduleCtrl);

  /*@ngInject*/
  function moduleCtrl($timeout, $log) {
    var self = this;

    self.logo = 'Josoroma';

    // Private

    var inviewHandler = function(inview, who) {
      if (who) {
        if (inview) {
          self['animate' + who] = false;
          $timeout(function() { self['animate' + who] = true; }, 1000);
        }
      }
    }

    var init = function() {
      self.progress = true;

      angular.element(window).bind('load', function() {
        $timeout(function() { self.progress = false; }, 1000);
      });
    }

    // Public

    self.inviewHandler = inviewHandler;
    self.init = init;
  }
})();

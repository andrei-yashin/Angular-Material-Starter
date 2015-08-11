(function() {
  'use strict';

  angular.module('pageHome')
  .directive('contactDir', contactDir);

  /*@ngInject*/
  function contactDir($templateCache) {
    return {
      // 'A' - only matches attribute name
      // 'E' - only matches element name
      // 'C' - only matches class name
      restrict: 'E',
      // @ simply reads the value (one-way binding)
      // = is two-way binding
      // & is used to bind functions
      // @ : Binds to the value as a string
      // = : Binds to a property
      // & : Binds to a function that can be called later
      // text: "@myText"
      // twoWayBind: "=myTwoWayBind"
      // oneWayBind: "&myOneWayBind"
      scope: {
        template: '@'
      },
      template: function (element, attributes) {
        return $templateCache.get(attributes.template)
      }
    };
  }
})();

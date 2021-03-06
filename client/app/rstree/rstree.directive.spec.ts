'use strict';

describe('Directive: rstree', function() {
  // load the directive's module and view
  beforeEach(module('mcrissDemoApp.rstree'));
  beforeEach(module('app/rstree/rstree.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<rstree></rstree>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the rstree directive');
  }));
});

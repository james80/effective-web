'use strict';

describe('myApp.people module', function() {

    beforeEach(module('myApp.people'));

    describe('people controller', function () {

    it('should ....', inject(function($controller) {
        //spec body
        var view1Ctrl = $controller('PeopleCtrl');
        expect(view1Ctrl).toBeDefined();
    }));
  });
});
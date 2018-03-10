describe('AboutCtrl ', function () {

  var controller;

  beforeEach(module('app.about'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller) {
    controller = $controller('AboutCtrl', {});
  }));

  it('should set the correct about page message', function () {
    expect(controller.message).toBe('I am ready to start your project. Can\'t wait for the start');
  });

});

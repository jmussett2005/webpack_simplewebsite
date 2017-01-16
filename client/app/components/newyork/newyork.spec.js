import NewyorkModule from './newyork'
import NewyorkController from './newyork.controller';
import NewyorkComponent from './newyork.component';
import NewyorkTemplate from './newyork.html';

describe('Newyork', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewyorkModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewyorkController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(NewyorkTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewyorkComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewyorkTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewyorkController);
      });
  });
});

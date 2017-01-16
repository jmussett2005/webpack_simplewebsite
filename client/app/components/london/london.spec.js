import LondonModule from './london'
import LondonController from './london.controller';
import LondonComponent from './london.component';
import LondonTemplate from './london.html';

describe('London', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LondonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LondonController();
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
      expect(LondonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LondonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LondonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LondonController);
      });
  });
});

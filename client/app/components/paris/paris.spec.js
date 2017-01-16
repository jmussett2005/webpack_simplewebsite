import ParisModule from './paris'
import ParisController from './paris.controller';
import ParisComponent from './paris.component';
import ParisTemplate from './paris.html';

describe('Paris', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ParisModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ParisController();
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
      expect(ParisTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ParisComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ParisTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ParisController);
      });
  });
});

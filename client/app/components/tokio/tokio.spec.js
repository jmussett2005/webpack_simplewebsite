import TokioModule from './tokio'
import TokioController from './tokio.controller';
import TokioComponent from './tokio.component';
import TokioTemplate from './tokio.html';

describe('Tokio', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TokioModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TokioController();
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
      expect(TokioTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TokioComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TokioTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TokioController);
      });
  });
});

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tokioComponent from './tokio.component';

let tokioModule = angular.module('tokio', [
  uiRouter
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('tokio', {
            url: '/tokio',
            component: 'tokio'
        });
})


.component('tokio', tokioComponent)

.name;

export default tokioModule;

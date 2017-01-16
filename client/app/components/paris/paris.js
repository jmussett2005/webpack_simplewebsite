import angular from 'angular';
import uiRouter from 'angular-ui-router';
import parisComponent from './paris.component';

let parisModule = angular.module('paris', [
  uiRouter
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('paris', {
            url: '/paris',
            component: 'paris'
        });
})


.component('paris', parisComponent)

.name;

export default parisModule;

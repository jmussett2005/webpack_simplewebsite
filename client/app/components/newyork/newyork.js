import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newyorkComponent from './newyork.component';

let newyorkModule = angular.module('newyork', [
  uiRouter
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('newyork', {
            url: '/newyork',
            component: 'newyork'
        });
})



.component('newyork', newyorkComponent)

.name;

export default newyorkModule;

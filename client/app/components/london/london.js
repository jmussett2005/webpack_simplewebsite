import angular from 'angular';
import uiRouter from 'angular-ui-router';
import londonComponent from './london.component';

let londonModule = angular.module('london', [
  uiRouter
])


.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('london', {
            url: '/london',
            component: 'london'
        });
})



.component('london', londonComponent)

.name;

export default londonModule;

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material'
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Common,
    Components
  ])
  
 .config(($stateProvider,$urlRouterProvider, $locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.when('/','/main');
    $urlRouterProvider.when('/paris','/paris');
    $urlRouterProvider.when('/london','/london');
    $urlRouterProvider.when('/newyork','/newyork');
    $urlRouterProvider.when('/tokio','/tokio');

  })


  .component('app', AppComponent);
  
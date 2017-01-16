import angular from 'angular';
import Main from './main/main';
import About from './about/about';
import London from './london/london';
import Newyork from './newyork/newyork';
import Paris from './paris/paris';
import Tokio from './tokio/tokio';


let componentModule = angular.module('app.components', [
  Main,
  About,
  London,
  Newyork,
  Paris,
  Tokio
])

.name;

export default componentModule;

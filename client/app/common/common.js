import angular from 'angular';
import Navbar from './navbar/navbar';
import Header from './header/header';
import Footer from './footer/footer';

let commonModule = angular.module('app.common', [
  Navbar,
  Header,
  Footer
])
  
.name;

export default commonModule;


import angular from '../lib/';
import common from './modules/common/';
import book from './modules/book/';
import RouteConfig from './routes.js';

angular.module('bookstore', ['common','ngRoute','book']);

document.addEventListener('DOMContentLoaded',function(){
  angular.bootstrap(document.body, ['bookstore']);
});


angular.module('book').config(RouteConfig);




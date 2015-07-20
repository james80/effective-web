'use strict';
angular.module('myApp', ['ngRoute', 'myApp.version'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/profiles', {
    templateUrl: 'partials/profiles.html',
    controller: 'ProfilesCtrl'
  })
  .when('/categories', {
    templateUrl: 'partials/categories.html',
    controller: 'CategoriesCtrl'
  })
  .when('/employment', {
    templateUrl: 'partials/employment.html',
    controller: 'EmploymentCtrl'
  })
  .when('/accounts', {
    templateUrl: 'partials/accounts.html',
    controller: 'AccountsCtrl'
  })
  .when('/banking', {
    templateUrl: 'partials/banking.html',
    controller: 'BankingCtrl'
  })
  .when('/funds', {
    templateUrl: 'partials/funds.html',
    controller: 'FundsCtrl'
  })
  .when('/payroll', {
    templateUrl: 'partials/payroll.html',
    controller: 'PayrollCtrl'
  })
  .when('/transactions', {
    templateUrl: 'partials/transactions.html',
    controller: 'TransactionsCtrl'
  })
  .otherwise({redirectTo: '/home'});
}])
.controller('HomeCtrl', [function () {

}])
.controller('ProfilesCtrl', [function () {

}])
.controller('CategoriesCtrl', [function () {

}])
.controller('EmploymentCtrl', [function () {

}])
.controller('AccountsCtrl', [function () {

}])
.controller('BankingCtrl', [function () {

}])
.controller('FundsCtrl', [function () {

}])
.controller('PayrollCtrl', [function () {

}])
.controller('TransactionsCtrl', [function () {

}])
;

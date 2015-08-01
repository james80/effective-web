'use strict';
angular.module('myApp', ['ngRoute', 'myApp.version'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({enabled:true,requireBase:false});
  $routeProvider
  .when('/home', {
    templateUrl: '/template/home.html',
    controller: 'HomeCtrl'
  })
  .when('/companies', {
    templateUrl: '/template/companies.html',
    controller: 'CompaniesCtrl'
  })
  .when('/people', {
    templateUrl: '/template/people.html',
    controller: 'PeopleCtrl'
  })
  .when('/accounts', {
    templateUrl: '/template/accounts.html',
    controller: 'AccountsCtrl'
  })
  .when('/banking', {
    templateUrl: '/template/banking.html',
    controller: 'BankingCtrl'
  })
  .when('/funds', {
    templateUrl: '/template/funds.html',
    controller: 'FundsCtrl'
  })
  .when('/billing', {
    templateUrl: '/template/billing.html',
    controller: 'BillingCtrl'
  })
  .when('/invoicing', {
    templateUrl: '/template/invoicing.html',
    controller: 'InvoicingCtrl'
  })
  .when('/transactions', {
    templateUrl: '/template/transactions.html',
    controller: 'TransactionsCtrl'
  })
  .when('/payroll', {
    templateUrl: '/template/payroll.html',
    controller: 'PayrollCtrl'
  })
  .when('/vendors', {
    templateUrl: '/template/vendors.html',
    controller: 'VendorsCtrl'
  })
  .when('/items', {
    templateUrl: '/template/items.html',
    controller: 'ItemsCtrl'
  })
  .when('/taxes', {
    templateUrl: '/template/taxes.html',
    controller: 'TaxesCtrl'
  })
  .otherwise({redirectTo: '/home'});
}])
.controller('HomeCtrl', [function () {

}])
.controller('CompaniesCtrl', [function () {

}])
.controller('PeopleCtrl', [function () {

}])
.controller('AccountsCtrl', [function () {

}])
.controller('BankingCtrl', [function () {

}])
.controller('FundsCtrl', [function () {

}])
.controller('BillingCtrl', [function () {

}])
.controller('InvoicingCtrl', [function () {

}])
.controller('TransactionsCtrl', [function () {

}])
.controller('PayrollCtrl', [function () {

}])
.controller('VendorsCtrl', [function () {

}])
.controller('ItemsCtrl', [function () {

}])
.controller('TaxesCtrl', [function () {

}])
;

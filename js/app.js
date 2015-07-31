'use strict';
angular.module('myApp', ['ngRoute', 'myApp.version'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/companies', {
    templateUrl: 'partials/companies.html',
    controller: 'CompaniesCtrl'
  })
  .when('/people', {
    templateUrl: 'partials/people.html',
    controller: 'PeopleCtrl'
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
  .when('/billing', {
    templateUrl: 'partials/billing.html',
    controller: 'BillingCtrl'
  })
  .when('/invoicing', {
    templateUrl: 'partials/invoicing.html',
    controller: 'InvoicingCtrl'
  })
  .when('/transactions', {
    templateUrl: 'partials/transactions.html',
    controller: 'TransactionsCtrl'
  })
  .when('/payroll', {
    templateUrl: 'partials/payroll.html',
    controller: 'PayrollCtrl'
  })
  .when('/vendors', {
    templateUrl: 'partials/vendors.html',
    controller: 'VendorsCtrl'
  })
  .when('/items', {
    templateUrl: 'partials/items.html',
    controller: 'ItemsCtrl'
  })
  .when('/taxes', {
    templateUrl: 'partials/taxes.html',
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

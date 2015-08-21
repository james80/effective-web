'use strict';

var effectiveApp = angular.module('effectiveApp', [
  'ngRoute',
  'effectiveApp.version',
  'effectiveApp.service'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  angular.element.ajaxSetup && angular.element.ajaxSetup({cache:true});
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
.controller('GlobalCtrl', function($scope) {
//  window.alert('Global');
})
.controller('HomeCtrl', function ($scope) {

})
.controller('CompaniesCtrl', function ($scope, companyService) {
  $scope.orderByField = "id";
  $scope.reverseSort = false;
  $scope.companies = companyService.query();
})
.controller('PeopleCtrl', function ($scope) {

})
.controller('AccountsCtrl', function ($scope) {

})
.controller('BankingCtrl', function ($scope) {

})
.controller('FundsCtrl', function ($scope) {

})
.controller('BillingCtrl', function ($scope) {

})
.controller('InvoicingCtrl', function ($scope) {

})
.controller('TransactionsCtrl', function ($scope, transactionService) {
  $scope.transactions = transactionService.getTransactions();
})
.controller('PayrollCtrl', function ($scope) {

})
.controller('VendorsCtrl', function ($scope) {

})
.controller('ItemsCtrl', function ($scope) {

})
.controller('TaxesCtrl', function ($scope) {

})
;

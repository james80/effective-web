'use strict';

var mockTransactions = [
  {
    id: 1,
    debitAccount: "Utilities - Water",
    creditAccount: "Credit Card - Visa",
    description: "Payed water bill.",
    amount: "87.12"
  },
  {
    id: 2,
    debitAccount: "Credit Card - Visa",
    creditAccount: "General Ledger",
    description: "Payed business card.",
    amount: "87.12"
  }
];

var effectiveApp = angular.module('effectiveApp', ['ngRoute', 'effectiveApp.version'])
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
.controller('HomeCtrl', [function ($scope, $http) {

}])
.controller('CompaniesCtrl', [function ($scope, $http) {

}])
.controller('PeopleCtrl', [function ($scope, $http) {

}])
.controller('AccountsCtrl', [function ($scope, $http) {

}])
.controller('BankingCtrl', [function ($scope, $http) {

}])
.controller('FundsCtrl', [function ($scope, $http) {

}])
.controller('BillingCtrl', [function ($scope, $http) {

}])
.controller('InvoicingCtrl', [function ($scope, $http) {

}])
.controller('TransactionsCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.transactions = [];
//  $scope.getTransactions = function() {
//    var httpRequest = $http({
//      method: 'POST',
//      url: '/echo/json/',
//      data: mockTransactions
//    }).success(function(data, status) {
//      $scope.transactions = data;
//    });
//  };
  $scope.getTransactions = function() {
    $scope.transactions = mockTransactions;
  }
  $scope.getTransactions();
}])
.controller('PayrollCtrl', [function ($scope, $http) {

}])
.controller('VendorsCtrl', [function ($scope, $http) {

}])
.controller('ItemsCtrl', [function ($scope, $http) {

}])
.controller('TaxesCtrl', [function ($scope, $http) {

}])
;
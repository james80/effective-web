'use strict';

angular.module('effectiveApp.service', ['ngResource'])

.factory('transactionService', function() {

  function getTransactions() {
    return [
    {
      id: 10000001,
      debitAccount: "Utilities - Water",
      creditAccount: "Credit Card - Visa",
      description: "Payed water bill.",
      amount: "87.12"
    },
    {
      id: 10000002,
      debitAccount: "Credit Card - Visa",
      creditAccount: "General Ledger",
      description: "Payed business card.",
      amount: "87.12"
    }];
  }

  return {
    getTransactions: getTransactions
  };
})

.factory('companyService', function ($resource) {
    return $resource('/data/companies', {}, {
      query: { method: 'GET', params: {}, isArray: true }
    });
})
;

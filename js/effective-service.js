'use strict';

angular.module('effectiveApp.service', [])

.factory('transactionService', function() {

  function getTransactions() {
    return [
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
    }];
  }

  return {
    getTransactions: getTransactions
  };
})
;
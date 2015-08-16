'use strict';

angular.module('effectiveApp.service', [])

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

.factory('companyService', function() {

  function getCompanies() {
    return [
    {
      id: 10000001,
      name: "Awesome Company #1",
      description: "This company is really awesome!"
    },
    {
      id: 10000002,
      name: "Super Company #2",
      description: "This is super company!"
    }];
  }

  return {
    getCompanies: getCompanies
  };
})
;

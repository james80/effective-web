'use strict';

var effectiveApp = angular.module('effectiveApp');

effectiveApp.run(function($httpBackend, $http) {

  $httpBackend.whenGET(/template\//).passThrough();
  $httpBackend.whenGET(/test\//).passThrough();

  // Load mock data.
  var companies = [];
  $http.get('test/data/companies.json')
    .then(function(res) {
        companies = res.data;
    });

  $httpBackend.whenPOST('/data/companies').respond(function(method, url, data, headers) {
    console.log('Received these data:', method, url, data, headers);
    companies.push(angular.fromJson(data));
    return [200, {}, {}];
  });

  $httpBackend.whenGET('/data/companies').respond(function(method,url,data) {
    console.log("Getting companies");
    return [200, companies, {}];
  });

});
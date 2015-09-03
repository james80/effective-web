'use strict';

angular.module('effectiveApp')

// Simulates back-end delay.
.config(function($provide) {
  $provide.decorator('$httpBackend', function($delegate) {
    var proxy = function(method, url, data, callback, headers) {
      var timer = 0;
      if (url.match(/^\/data/) ) {
        timer = Math.floor((Math.random() * 1500) + 500);
      } else {
        timer = Math.floor((Math.random() * 700) + 500);
      }
      var interceptor = function() {
        var _this = this,
            _arguments = arguments;
        setTimeout(function () {
          callback.apply(_this, _arguments);
        }, timer);
      };
      return $delegate.call(this, method, url, data, interceptor, headers);
    };
    for(var key in $delegate) {
        proxy[key] = $delegate[key];
    }
    return proxy;
  });
})

.run(function($httpBackend, $http) {

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
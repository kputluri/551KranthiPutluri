'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('EmployeeDetailCtrl', function ($scope, $http, $routeParams) {
     $http.get('http://localhost:3000/api/employee/'+$routeParams.id).success(function(data){
    	    $scope.employee = data[0];
    	  });
     $scope.next = function(pageNumber){
     	// Get next page data 

     	console.log("In next function");
     }

  });

'use strict';
/**
* @ngdoc function
* @name angularAppApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularAppApp
*/
angular.module('angularAppApp')
.controller('EmployeesCtrl', function ($scope, $http) {

$scope.employeesPerPage = 5;
$scope.currentPage = 0;

$http.get('http://localhost:3000/api/employees').success(function(data) {
$scope.employees = data;

/////page count
$scope.pageCount = function() {
return Math.ceil(data.length/5);
};
});
});

// angular.module('angularAppApp').filter('pagination', function()
// {
//  return function(input, start)
//  {
//   start = parseInt(+start);
//   return input.slice(start);
//  };
// });
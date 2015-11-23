'use strict';
/**
* @ngdoc function
* @name angularAppApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularAppApp
*/
angular.module('angularAppApp')
.controller('EmployeeCreateCtrl',function ($scope, $http) {
$scope.create = function(pageNumber){
if($scope.fName!==""||$scope.lName!==""||$scope.email!==""||$scope.pword!==""||$scope.phone!==""){
var objUser = {fName:$scope.fName,lName:$scope.lName,email:$scope.email,pword:$scope.pword,phone:$scope.phone};
$http.post('/api/',objUser).success(function(data){
console.log("data have been sent");
});
}
return true;
}
});
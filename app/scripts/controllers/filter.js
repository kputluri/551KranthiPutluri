angular.module('angularAppApp').filter('pagination', function()
{
 return function(input, start)
 {
  start = parseInt(+start);
  return input.slice(start);
 };
});
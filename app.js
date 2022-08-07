// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'attende1', fish: 'Dipak', tastiness: 67 },
    { name: 'finisher', fish: 'Longe', tastiness: 78 },
    { name: 'runner', fish: 'Olaleye', tastiness: 80 },
    { name: 'cricketer', fish: 'Shubham', tastiness: 83 },
    
  ];
  
});

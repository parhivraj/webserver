// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'attende1', fish: 'Ricky', tastiness: 67 },
    { name: 'finisher', fish: 'CR7', tastiness: 78 },
    { name: 'runner', fish: 'Ronaldo', tastiness: 80 },
    { name: 'cricketer', fish: 'messi', tastiness: 83 },
    
  ];
  
});

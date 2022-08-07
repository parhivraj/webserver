// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'attende1', fish: 'carlos', tastiness: 67 },
    { name: 'Phill', fish: 'manu', tastiness: 78 },
    { name: 'Tiger', fish: 'jipson', tastiness: 80 },
    { name: 'Rainbow', fish: 'Marcos', tastiness: 83 },
    
  ];
  
});

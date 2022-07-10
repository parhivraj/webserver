// app.js
angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'Cali Roll', fish: 'Rohit', tastiness: 67 },
    { name: 'Philly', fish: 'Aron', tastiness: 78 },
    { name: 'Tiger', fish: 'Dinesh', tastiness: 80 },
    { name: 'Rainbow', fish: 'Karthik', tastiness: 83 },
    
  ];
  
});

var app = angular.module('myApp', []);
app.controller('homeCtrl', function($scope, $http,$rootScop,$location) {
  $scope.init = function() {
        $scope.searchByName = [];
        $scope.users= [];
      };

  $http({
    method : "GET",
    url : "https://jsonplaceholder.typicode.com/users"
  }).then(function mySuccess(response) {
      $scope.users = response.data;
      for ( var index in $scope.users)
     {
       $scope.searchByName[index].Id == $scope.users.Id;
       $scope.searchByName[index].name  = $scope.users[index].name;
    }
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
  });


$scope.search = function($event) {
      if ($event.keyCode == 39) {    // confirm suggestion with right arrow
        $scope.query = $scope.suggestion.text;
        return;
      }
      $scope.suggestion.text = '';
      for (var i = 0; i < searchByName.length; i++) {
        if ($scope.query && searchByName[i].name.indexOf($scope.query) === 0) {
          $scope.suggestion.text = [i];
          break;
        }
      }
}

});
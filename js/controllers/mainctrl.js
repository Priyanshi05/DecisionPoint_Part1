

adminapp.controller("MainController", function ($rootScope, $scope, $location, $http,
                                                $cookieStore, AuthService, AppUtil) {


    if ($location.path() == "/index") {
        $location.path("/index");
    }

    $scope.listBody = function () {
        $scope.loading = true;
        $location.path("/listBody");
    };
    

});
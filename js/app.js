

var adminapp = angular.module('adminapp', ['ngFileUpload', 'ui.bootstrap', 'dndLists', 'ui.router', 'ngCookies',
    '720kb.datepicker', 'ui.grid', 'ui.grid.edit', 'ui.grid.pagination', 'ui.grid.resizeColumns',
    'ui.grid.moveColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ngResource', 'isteven-multi-select',
    'ui.select2', 'disableAll','pathgather.popeye']);

adminapp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    }).state('Home', {
        url: '/Home',
        templateUrl: 'views/Home.html',
        controller: 'homeCtrl'
    }).state('ListBody', {
        url: '/listBody',
        controller: 'listBodyCtrl'

.otherwise({redirectTo: '/'});
});

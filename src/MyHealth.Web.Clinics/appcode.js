/// <reference path='../typings/angularjs/angular.d.ts'/>
/// <reference path='../typings/angularjs/angular-route.d.ts'/>
var MyHealth;
(function (MyHealth) {
    var Clinics;
    (function (Clinics) {
        'use strict';
        var Application;
        (function (Application) {
            angular.module('app', ['ui.router']);
            Application.getModule = function () {
                return angular.module('app');
            };
            var app = Application.getModule();
            function initialize() {
                app.config(config);
            }
            Application.initialize = initialize;
            function config($stateProvider, $urlRouterProvider) {
                var defaultUrl = '/';
                $urlRouterProvider.when('', defaultUrl);
                $urlRouterProvider.otherwise('/404');
                $stateProvider
                    .state('app', {
                    url: defaultUrl,
                    templateUrl: 'app/views/clinicsList.html',
                    controller: 'clinicsListController'
                })
                    .state('error', {
                    url: '/404',
                    templateUrl: '/app/views/error.html'
                });
            }
        })(Application = Clinics.Application || (Clinics.Application = {}));
        Application.initialize();
    })(Clinics = MyHealth.Clinics || (MyHealth.Clinics = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Clinics;
    (function (Clinics) {
        var Application;
        (function (Application) {
            var app = Application.getModule();
            var ClinicsListController = (function () {
                function ClinicsListController($scope, $rootScope, dataService) {
                    $rootScope.loading = true;
                    dataService.getClinics()
                        .then(function (clinics) {
                        $scope.clinics = clinics;
                        if (!$scope.clinics.length) {
                            $scope.noData = true;
                        }
                    })
                        .finally(function () {
                        $rootScope.loading = false;
                    });
                }
                return ClinicsListController;
            }());
            app.controller('clinicsListController', ClinicsListController);
        })(Application = Clinics.Application || (Clinics.Application = {}));
    })(Clinics = MyHealth.Clinics || (MyHealth.Clinics = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Clinics;
    (function (Clinics) {
        var Application;
        (function (Application) {
            var app = Application.getModule();
            var DataService = (function () {
                function DataService($http) {
                    this.$http = $http;
                }
                DataService.prototype.getClinics = function () {
                    return this.$http.get('/clinics').then(function (response) {
                        return response.data;
                    });
                };
                return DataService;
            }());
            Application.DataService = DataService;
            app.service('dataService', DataService);
        })(Application = Clinics.Application || (Clinics.Application = {}));
    })(Clinics = MyHealth.Clinics || (MyHealth.Clinics = {}));
})(MyHealth || (MyHealth = {}));
//# sourceMappingURL=appcode.js.map
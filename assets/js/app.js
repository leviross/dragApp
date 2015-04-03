var app = angular.module('DragApp', ['ui.bootstrap','ngRoute','ngDraggable']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

    // no more #!
    $locationProvider.html5Mode(true);

    // define routes
    $routeProvider
    .when('/',{
        templateUrl:'/views/home.html',
        controller:'HomeCtrl'
    })

    app.run(function(){
        console.log("App has been created!");
    });



}]);
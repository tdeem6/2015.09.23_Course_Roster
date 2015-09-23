var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});

/**
 * Created by Sam.Sun on 11/30/2016.
 */
(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieApp", {
        templateUrl: "ps-movies/movie-app.component.html",
        $routeConfig: [
            {path: "/home", component: "movieList", name: 'List'},
            {path: "/about", component: "appAbout", name: "About"},
            {path: "/detail/:id", component: "movieDetails", name: "Details"},
            {path: "/**", redirectTo: ["List"]}
        ]
    })
}());
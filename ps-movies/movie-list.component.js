/**
 * Created by Sam.Sun on 11/29/2016.
 */
(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieList", {
        templateUrl: "ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: function () {
            var model = this;
            model.message = "Hello from a component controller!";
            model.changeMessage = function () {
                model.message = "New message";
            };
        }
    });
}());
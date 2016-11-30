/**
 * Created by Sam.Sun on 11/30/2016.
 */
(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: "ps-movies/movie-details.component.html",
        // $canActivate: function($timeout) {
        //     return $timeout(function() {
        //         return true;
        //     }, 2000);
        // },
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$routerOnActivate = function (next) {
                console.log(next);
                model.id = next.params.id;
            }
        }
    })
}());
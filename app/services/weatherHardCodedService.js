'use strict';

var cities = ["Katowice", "Jaworzno", "Rzeszów", "Kraków"];
var _ = require('underscore');

exports.forecastsForAll = function () {
    var result = [];
    _.each(cities, function (city) {
        var cityForecast = generateForecasts(city);
        result.push(cityForecast)
    });
    return result;
};

exports.foreastForCity = function (city) {
    var result = generateForecasts(city);
    return result;
};

var generateForecasts = function (city) {
    var cityForecast = {};
    if (cities.indexOf(city) !== -1) {
        cityForecast.city = city;
        cityForecast.forecasts = [];

        for (var i = 0; i <= 16; i++) {
            var forecast = {};
            forecast.minTemperature = Math.floor((Math.random() * 10) + 15);
            forecast.maxTemperature = Math.floor((Math.random() * 21) + 15);
            forecast.averageTemperature = (forecast.minTemperature + forecast.maxTemperature) / 2;

            cityForecast.forecasts.push(forecast);
        }
        return cityForecast;
    }
    else {
        return city + " is not available";
    }
};
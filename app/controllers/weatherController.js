'use strict';

var weatherHardCodedService = require("../services/weatherHardCodedService");

exports.getAllCityForecasts = function(req, res){
    var data = weatherHardCodedService.forecastsForAll();
    res.json(data);
};

exports.getForecastForCity = function(req, res){
    var data = weatherHardCodedService.foreastForCity(req.params.cityName);
    res.json(data);
};
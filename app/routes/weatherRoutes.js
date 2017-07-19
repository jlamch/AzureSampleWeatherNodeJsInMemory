'use strict';

module.exports = function (app) {
        var weather = require("../controllers/weatherController");

        app.route('/weather')
                .get(weather.getAllCityForecasts);

        app.route('/weather/:cityName')
                .get(weather.getForecastForCity);
}
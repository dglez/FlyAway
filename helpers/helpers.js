
module.exports = {

    getAirports: function () {
        var fs = require('fs');
        var file = __dirname + "/airports.json";
        var airportInfo = JSON.parse((fs.readFileSync(file)));
        return airportInfo;
    }

};
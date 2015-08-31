'use strict';

var request = require('request');
var parseString = require('xml2js').parseString;

module.exports = function (parcelNumber, countryCode, date, cb) {
    var url = 'http://tracking.yodel.co.uk/wrd/run/wt_xml_gen_pw.getParcelHistory';

	// Validate parameters
    if (typeof parcelNumber === 'undefined' || typeof countryCode === 'undefined' || countryCode.length !== 2) {
        throw new Error('Parameter validation failed.');
    }

    if (typeof date === 'function') {
        cb = date;
        date = undefined;
    }

	// URL construction
	url += ('?pcl_no%3d' +  parcelNumber + '&country%3d' + countryCode);
	if (typeof date !== 'undefined') {
        url += ('&date%3d' + date);
	}

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function (err, result) {
                cb(err, !err ? result : 'Error parsing XML');
            });
        }
        else {
            cb(error, 'Request error: ' + response.statusCode);
        }
    });

};

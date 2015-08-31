'use strict';

var request = require('request');
var parseString = require('xml2js').parseString;

module.exports = function (parcelNumber, countryCode, date) {
    var url = 'http://tracking.yodel.co.uk/wrd/run/wt_xml_gen_pw.getParcelHistory';

	// Validate parameters
    if (typeof parcelNumber === 'undefined' || typeof countryCode === 'undefined' || countryCode.length !== 2) {
        throw new Error('');
    }

	// URL construction
	url += ('?pcl_no%3d' +  parcelNumber + '&country%3d' + countryCode);
	if (typeof date !== 'undefined') {
        url += ('&date%3d' + date);
	}

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function (err, result) {
                if (!err) {
                    return result;
                }
                else {
                    throw new Error(err);
                }
            });
        }
        else {
            throw new Error(error);
        }
    });
    
};

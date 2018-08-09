var _ = require('lodash');
var config = require('../../config.js');

var FIAT_SYMBOL = 'USD';
var API_KEY = config.fiatRateServiceOpts.apiKey;

var provider = {
    name: 'coinlib',
    url: 'https://coinlib.io/api/v1/coin?key=' + API_KEY + '&pref=' + FIAT_SYMBOL + '&symbol=EXCC',
    parseFn: function(raw) {
        if (!raw.price) return null;
        return [{
            code: FIAT_SYMBOL,
            value: raw.price,
        }];
    },
};

module.exports = provider;

var log4js = require('log4js');

var logger = log4js.getLogger('es6_jasmine');

logger.setLevel('RESULT');

module.exports = logger;
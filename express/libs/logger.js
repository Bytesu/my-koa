/**
 * Created by byte on 2015/7/17.
 */
var winston = require('winston');
var moment = require('moment');
var single;
var logger = function () {
    if(!single)
        single =  new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
            new (winston.transports.File)({
                filename: 'logger.log',
                timestamp: function () {
                    return moment().format("YYYY-MM-DD hh:mm:ss:SSS a")+'-'+Math.random(); //();
                }
            })
        ]
    });
    return single;
};
logger().log('info', 'Hello distributed log files!');

//util.prototype.winston = logger;
module.exports = logger();

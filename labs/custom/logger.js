/**
 * Created by byte_ on 2015/7/8.
 */
var util = function(){},single;

var _ = require('lodash');
util.prototype.log = function(){
    var argv = _.toArray(arguments).slice();
    //console.log(argv);
    console.log.apply(global,argv);
};

/***
 * 多传输的日志记录：
 * @type {exports|module.exports}
 */
var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'logger.log' })
    ]
});
//logger.log('info', 'Hello distributed log files!');
//logger.info('Hello again distributed logs');
util.prototype.winston = logger.info;

module.exports= function(){
    if(!single) single = new util();
    return single;
}();
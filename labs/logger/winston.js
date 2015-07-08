/**
 *winston:  muti transport async logger
 * Created by byte_ on 2015/7/8.
 * url:
 * 1. https://github.com/winstonjs/winston
 * 2.
 */
var winston = require('winston');
winston.add(winston.transports.File, { filename: 'somefile.log' });
//winston.remove(winston.transports.Console);
winston.log('info','tet------------');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'logger.log' })
    ]
});
logger.log('info', 'Hello distributed log files!');
logger.info('Hello again distributed logs');
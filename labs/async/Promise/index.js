/**
 * bluebird  is a fully featured promise lib with focus on innovative features and performance
 * Created by byte_ on 2015/7/8.
 * url:
 * 1. https://github.com/petkaantonov/bluebird
 */
var Promise = require('bluebird');
var log = require('./../../custom/logger');
var fs ;
//fs = Promise.promisify(require('fs'));
//fs = Promise.promisAll(require('fs'));
/*fs.readFile('./../index.js').then(function(val){
    try {
        log.log(new String(val).toString())
    } catch (e) {
        log.log(e)
    }
});*/

console.log(['s','c'].indexOf('c'));


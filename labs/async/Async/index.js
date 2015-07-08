/**
 * Async provides straight-forward, powerfull functions for working with Asynchronous JavaScript
 * Created by byte_ on 2015/7/8.
 * url:
 * 1. https://github.com/caolan/async
 */

var fs = require('fs');
var _ = require('lodash');
var loger = require('./../../custom/logger');
var async = require('async');
async.map(['./../index.js', './logger.log'], fs.stat, function (err, results) {
    //loger.log(results);
//    loger.winston(results);
    // results is now an array of stats for each file
});
async.filter(['./../index.js', './logger.log', 'file1', 'file2'], fs.exists, function (results) {
    //  loger.winston(results);
    loger.log(results);
    // results is now an array of stats for each file
});

/*
async.eachSeries(hugeArray, function iterator(item, callback) {
    if (inCache(item)) {
        callback(null, cache[item]); // if many items are cached, you'll overflow
    } else {
        doSomeIO(item, callback);
    }
}, function done() {
    //...
});*/

/**
 * Created by byte_ on 2015/7/3.
 */
var util = require('./../libs/byte');
var development = require('./config.dev');
var _static = {
    bower:"bower_components",
    tmp:".tmp",
    labs:"labs",
    app:"app",
    libs:"libs"
};
var config = {
    /**
     * 应用程序配置
     */
    app: {
        name: 'GeNu',
        version: '1.0.0',
        author: 'Bytesu',
        email: 'byte_su@163.com',
        company: 'GeNu'
    },
    cookie: {
        secret: util.randomStr(10)
    },
    path: {
        _static: ["app", ".tmp", 'labs', 'express', 'libs','bower_components']//静态目录文件
    },
    d:{
      _static:[]
    },
    backend:{
        _static:[_static.bower]
    },
    mongodb: {
        host: 'localhost',
        port: '27017',
        db: 'gnu'
        /*user:'bytedb',
         pass:'211064db'*/
    }
};
//console.log(util.randomStr(10));
//if (process.env.NODE_ENV) {
//    config = development;
//}
module.exports = config;

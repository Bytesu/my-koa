/**
 * Created by byte on 2015/7/18.
 */
var appConfig = require('./index.js');
function get(obj,key){

    if(typeof key !== 'string')throw new TypeError('参数类型错误!');
    if(obj[key]==undefined)throw new Error('找不到'+key+'!');

    return obj[key];
}
module.exports.get = function(key){
    return get(appConfig,key)
};
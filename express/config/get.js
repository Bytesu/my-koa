/**
 * Created by byte on 2015/7/18.
 */
var appConfig = require('./index.js');
function get(obj,key){

    if(typeof key !== 'string')throw new TypeError('�������ʹ���!');
    if(obj[key]==undefined)throw new Error('�Ҳ���'+key+'!');

    return obj[key];
}
module.exports.get = function(key){
    return get(appConfig,key)
};
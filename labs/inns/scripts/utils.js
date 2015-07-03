/**
 * Created by byte on 2015/7/3.
 */
function SuUtil(){}
/**
 * 判断系统类型
 */
SuUtil.prototype.isAndroid = function(){
    var ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
        return false;
    } else if (/android/.test(ua)) {
        return true;
    }
};
var single;
function getSingle(){
    if(single)return single;
    single = new SuUtil();
    return single;
}
/**
 * Created by byte_ on 2015/7/6.
 */
    var test = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
var Random = function(len){
    len = len?len:32;
    var pwd = '';
    var maxPos = test.length;
    for (i = 0; i < len; i++) {
        pwd += test.charAt(Math.floor(Math.random() * maxPos));
    }
    console.log(pwd)
    return pwd;
}
Random();
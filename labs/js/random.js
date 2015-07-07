/**
 * Created by byte_ on 2015/7/6.
 */


function Random (){}

Random.prototype.random1 = function(){
    return Math.random().toString(36).substr(2, 15);
}
Random.prototype.random2 = function(len){
    var test = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    len = len?len:32;
    var pwd = '';
    var maxPos = test.length;
    for (i = 0; i < len; i++) {
        pwd += test.charAt(Math.floor(Math.random() * maxPos));
    }
    console.log(pwd)
    return pwd;
}
new Random().random1();
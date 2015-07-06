/**
 * Created by byte_ on 2015/7/6.
 */
var generator = function () {
    var total = 0;
    console.time('Test')
    for (var i = 0; i < 1000; i++) {
       // console.log(i);
        total += i;
        //setTimeout(function(){},0);
    }
    console.timeEnd('Test')
};

generator();
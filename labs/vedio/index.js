/**
 * Created by bytesu on 15/8/31.
 */
//var fs = require('fs');
//var path = require('path');
//
//function readBigFileEntry(filename, response) {
//    path.exists(filename, function(exists) {
//        if (!filename || !exists) {
//            response.writeHead(404);
//            response.end();
//            return;
//        }
//
//        var readStream = fs.ReadStream(filename);
//
//        var contentType = 'none';
//        var ext = path.extname(filename);
//        switch (ext) {
//            case ".flv":
//                contentType = "video/flv";
//                break;
//        }
//
//        response.writeHead(200, {
//            'Content-Type' : contentType,
//            'Accept-Ranges' : 'bytes',
//            'Server' : 'Microsoft-IIS/7.5',
//            'X-Powered-By' : 'ASP.NET'
//        });
//
//
//
//        readStream.on('close', function() {
//            response.end();
//            console.log("Stream finished.");
//            process.exit(0);
//        });
//        readStream.pipe(response);
//    });
//}
//

//readBigFileEntry();



//我再建一个接受视频流的客户端， 代码如下，
var http = require('http')
var fs = require('fs')

var options = {
    host:'http://tv.jsypx.com.cn/',
    port:'80',
    path:'/',
    method:'GET',
    headers:{
        "X-Requested-With":"ShockwaveFlash/18.0.0.232",
        "If-Range":"547e76e8-e14b4af"
    }
}

var writeStream = fs.createWriteStream('khyjxjy01.flv')

var passedLength = 0;
var lastSize = 0;
var startTime = Date.now();
var totalSize = 0;

var req = http.request(options, function(res){
    console.log('STATUS' + res.statusCode)

    totalSize = res.headers['content-length'];
    console.log(totalSize);

    // console.log('HEADERS' + JSON.stringify(res.headers))
    // res.setEncoding('utf8')

    res.on('data', function(chunk){
        //  console.log('BODY' + chunk);
        passedLength += chunk.length;
        writeStream.write(chunk);
    })

    res.on('end', function(){
        writeStream.end();
        console.log('xx');
    })
})

req.end();
var out = process.stdout;

setTimeout(function show() {
    var percent = Math.ceil((passedLength / totalSize) * 100);
    var size = Math.ceil(passedLength / 1000000);
    var diff = size - lastSize;
    lastSize = size;
    //out.clearLine();
    //out.cursorTo(0);
    out.write('已完成' + size + 'MB, ' + percent + '%, 速度：' + diff * 2 + 'MB/s');
    if (passedLength < totalSize) {
        setTimeout(show, 50);
    } else {
        var endTime = Date.now();
        console.log();
        console.log('共用时：' + (endTime - startTime) / 1000 + '秒。');
        process.exit(0);
    }
}, 50);
var io = require('socket.io'),
    log = require('./logger');
var single, _socket;
function socket(http) {
    if (!single)single = io(http);
    //监听连接事件
    single.on('connection', function (socket) {
        if (!_socket)_socket = socket;
        log.log('a user connected !');
        _socket.on('disconnect', function () {
            log.log('a user disconnected');
        });

    });
}
function emit(event, obj) {
    log.log('info','-----emit a event :'+event);
    if(single){
        single.emit(event,obj)
    }else{
        throw new Error('参数未初始化!');
    }
}
function listen(event, cb) {
    if(_socket){
        _socket.on(event,cb)
    }else{
        throw new Error('参数未初始化!');
    }
}
module.exports.socket = socket;
module.exports.emit = emit;
module.exports.listen = listen;
var io = require('socket.io'),
    log = require('./logger');
var single, _socket;
function socket(http) {
    if (!single)single = io(http);
    //���������¼�
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
        throw new Error('����δ��ʼ��!');
    }
}
function listen(event, cb) {
    if(_socket){
        _socket.on(event,cb)
    }else{
        throw new Error('����δ��ʼ��!');
    }
}
module.exports.socket = socket;
module.exports.emit = emit;
module.exports.listen = listen;
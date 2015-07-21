/**
 * Created by byte on 2015/7/18.
 */
(function($,io){

    var socket = io();
    socket.on('chat.wx',function(msg){
        console.log(JSON.stringify(msg))
    });
})(jQuery,io);

/**
 * Created by byte_ on 2015/7/7.
 */
var Emitter = require('events').EventEmitter;
var event = new Emitter();
event.addListener('user.create',function(arg){
    console.log('User created 1!',arg);

});
event.addListener('user.create',function(arg){
    console.log('User created 2!',arg);

});
event.emit('user.create','arg1')
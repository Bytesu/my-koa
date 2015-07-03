/**
 * Created by bytesu on 15-6-19.
 */
onmessage = function(evt){
    console.log('from master worker data:',evt.data);
    console.log('from master worker data:',evt);
    postMessage('send to master worker data:'+'你好，主线程')
}
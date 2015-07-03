/**
 * Created by byte_ on 2015/7/2.
 */

var koa = require('koa');
var app = koa();

//app.keys = ['im a newer secret', 'i like turtle'];
//app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');


// x-response-time

/*
app.use(function * (next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function * (next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

*/

app.use(function *(){
    /*console.log(this);
    console.log(this.request);
    console.log(this.response);*/
    this.body = 'Hello, world !sfsdf'
});
/*

app.listen(6000);

var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});*/

app.listen(3002);

module .exports = app;
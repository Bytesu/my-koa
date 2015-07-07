/**
 * Created by byte_ on 2015/7/2.
 */
var koa = require('koa');
var app = module.exports  = koa();


app.use(function *pageNotFound(next){
    yield  next;
    if(404 === this.status)return;
    this.status = 404;
    switch (this.accepts('html','json')){
        case 'html':
            this.type = 'html';
            this.body = '<p>Page Not Found</p>';
            break;
        case 'json':
            this.body = {
                message: 'Page Not Found'
            };
            break;
        default:
            this.type = 'text';
            this.body = 'Page Not Found';
    }
    this.body = 'Hello, World ! ^-^ '
});
if (!module.parent) app.listen(3000);
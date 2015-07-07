/**
 * Created by byte_ on 2015/7/2.
 */
var app = require('./app');
var request = require('supertest').agent(app.listen());
describe('404',function(){
    describe('when GET /',function(){
        it('should return the 404 page ',function(done){
            request.get('/').expect(404).expect('/Page Not Found',done);
        })
    })
})
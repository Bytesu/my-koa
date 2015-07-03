/**
 * Created by byte_ on 2015/7/3.
 */
var Env = function () {

};

Env.prototype.dev = {
    port: '3005',
    node_env: 'development'
};

Env.prototype.setEnv = function (env) {
    if (!env) {
        env = this.dev;
        console.log('---------------',env.node_env)
        process.env.NODE_ENV = env.node_env;
        process.env.PORT = env.port;
    }
};
var single ;
function getSingle(){
    if(single)return single;
    single = new Env();
    return single;
}

module.exports = getSingle();
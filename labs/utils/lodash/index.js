/**
 * Created by byte_ on 2015/7/8.
 */
var _ = require('lodash');
var greet = function(greeting, name) {
    var res =  greeting + ' ' + name
    console.log(res);
    return res;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// → 'hello fred'

// using placeholders
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// → 'hi fred'


var greet = function(greeting, name) {
    return greeting + ' ' + name;
};

var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// → 'hi fred'

// using placeholders
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// → 'hello fred'


function log(){
    var argv = _.toArray(arguments).slice();
    //console.log(argv);
    console.log.apply(global,argv);
}
///merge
var users = {
    'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};

var ages = {
    'data': [{ 'age': 36 }, { 'age': 40 }]
};

log(_.merge(users, ages));



var object = {
    'fruits': ['apple'],
    'vegetables': ['beet']
};

var other = {
    'fruits': ['banana','apple'],
    'vegetables': ['carrot']
};

log(_.merge(object, other, function(a, b) {
    if (_.isArray(a)) {
        return _.uniq(a.concat(b));
    }
}));
//console.log(_.merge.toString())

var ns = 's.s.d'.split('.'),
    ref = {},
    currentName;

while( currentName = ns.shift() ){
    log(ns)
    if(_.isObject(ref) && ref[currentName]){
        ref = ref[currentName]
    }else{
        ref = undefined
        break;
    }
}
console.log(ref)

var require

console.log(_.defaults({},{test:''}))
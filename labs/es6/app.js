/**
 * ECMAScript 6 亮点
 * Created by byte_ on 2015/7/3.
 * Source:
 * 1. https://github.com/lukehoban/es6features#classes
 * 2. //新语法 url:http://blog.chinaunix.net/uid-26672038-id-4410549.html
 */

'use strict';
let first = ''


/**
 *Arrows
 */
/*// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});

// Lexical this
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}*/

/***
 * Classes
 */


/*class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        super(geometry, materials);

        this.idMatrix = SkinnedMesh.defaultMatrix();
        this.bones = [];
        this.boneMatrices = [];
        //...
    }
    update(camera) {
        //...
        super.update();
    }
    static defaultMatrix() {
        return new THREE.Matrix4();
    }
}*/
/***
 * 增强的字面量[literals]
 * @type {{__proto__: *, handler: *, toString}}
 */

var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
        // Super calls
        return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};


/*
    模板字符串
 */


/**
 * Created by byte on 2015/7/18.
 */
var mongoose = require('mongoose'),
    cfg = require('./../../config/get.js');
var mongodb = cfg.get('mongodb');
/**
 * todo:mongodb数据库权限验证
 * @type {string}
 */

var uri = 'mongodb://'+mongodb.host+':'+mongodb.port+'/'+mongodb.db;
//ongoose.connect('mongodb://user:pass@localhost:port/database');
var db = mongoose.connect(uri);


var schema = require('./schema.js');
//定义Schema
var UserSchema = new mongoose.Schema(schema.user);
//Schema发布为Model
var UserModel = db.model('User',UserSchema);
//如果该Model已经发布，则可以直接通过名字索引到，如下：
//var PersonModel = db.model('Person');
//如果没有发布，上一段代码将会异常
//Model创建 Entity
var UserEntity = new UserModel({name:'SuWeiming',gender:1,img:'www.baidu.com'});
module.exports.UserModel = UserModel;
//打印这个实体的名字看看
//console.log(UserEntity.name); //Krouky
//UserEntity.save();
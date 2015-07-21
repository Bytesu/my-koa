/**
 * Created by byte on 2015/7/18.
 */
var mongoose = require('mongoose'),
    cfg = require('./../../config/get.js');
var mongodb = cfg.get('mongodb');
/**
 * todo:mongodb���ݿ�Ȩ����֤
 * @type {string}
 */

var uri = 'mongodb://'+mongodb.host+':'+mongodb.port+'/'+mongodb.db;
//ongoose.connect('mongodb://user:pass@localhost:port/database');
var db = mongoose.connect(uri);


var schema = require('./schema.js');
//����Schema
var UserSchema = new mongoose.Schema(schema.user);
//Schema����ΪModel
var UserModel = db.model('User',UserSchema);
//�����Model�Ѿ������������ֱ��ͨ�����������������£�
//var PersonModel = db.model('Person');
//���û�з�������һ�δ��뽫���쳣
//Model���� Entity
var UserEntity = new UserModel({name:'SuWeiming',gender:1,img:'www.baidu.com'});
module.exports.UserModel = UserModel;
//��ӡ���ʵ������ֿ���
//console.log(UserEntity.name); //Krouky
//UserEntity.save();
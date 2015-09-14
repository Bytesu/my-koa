/**
 * Created by bytesu on 15/9/14.
 */
/**
 * 后台管理控制器
 * Created by bytesu on 15/9/13.
 */
var backendController = function(){};

backendController.prototype.index = function(req,res){
    res.render('b/index');
};

module.exports = backendController;
// 资产相关页面controller

// controller 是直接处理请求的函数集合，函数格式为function(req, res)

var sqlite = require('../services/sqlite3.js');
module.exports = {
    edit:function(req, res){
        res.render('edit', {});
    },
    editPost:function(req, res){
        res.render('edit', {});
//        sqlite.updateQuestion();
//        return;
        var type = req.body.typename;
        var question = req.body.question;//1
        var answer = req.body.answer;//1
        var level = req.body.level;
        console.log(type + '--'+ question + '--' + answer + 'level -- ' + level);
        sqlite.editQuestion(type,question,answer,level);
    }
};

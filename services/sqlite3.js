/**
 * Created by xiansuo on 2014/6/6.
 */

"use strict";

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('everydaypoem');

var sqlite = {
    insertRows:function(list){
        if(!list || list.length == 0)return;
        var i = 0;
        function insertOver(){
            i++;
            if(i < list.length)
            {
                insertdata(list[i]);
            }
            else
            {
                console.log('插入数据结束：'+list.length);
                //db.close();不关闭数据库了
            }
        }
        function insertdata(data){
            db.all("SELECT id, typeid FROM sxs_poem_list where url=?",[data.url], function(err, rows) {
                if(rows && rows.length > 0)
                {
                    var typeid = rows[0].typeid;
                    if(!(typeid.indexOf(data.typeid) > -1))
                    {
                        typeid+= ','+ data.typeid;
                    }
                    db.run("UPDATE sxs_poem_list set typeid = ? where id = ?",
                        [typeid, rows[0].id],function(error){
                            if(error){
                                console.log("更新信息出错：" + data.title + "  --error:" + error);
                            }
                            console.log('更新了数据'+ rows[0].typeid +','+ data.typeid);
                            insertOver();
                        });
                }
                else
                {
                    db.run("INSERT INTO sxs_poem_list (author, content, translate, title, typeid, url) " +
                            "VALUES (?, ?, ?, ?, ?, ?);",
                        [data.author, data.content, data.trans, data.title, data.typeid, data.url],function(error){
                            if(error){
                                console.log("错误信息标题：" + data.title + "  --error:" + error);
                            }
                            insertOver();
                        });
                }
            });
        }
        insertdata(list[i]);

    },
    readAllRows:function(){
        console.log("readMyAllRows lorem");
        db.all("SELECT id, title FROM sxs_poem_list", function(err, rows) {
            rows.forEach(function (row) {
                console.log(row.id + ": " + row.title);
            });
            db.close();
        });

    },
    closeDb:function() {
        console.log("closeDb");
        db.close();
    },

    editQuestion:function(type,question,answer,level){
        question = question.replace(/[ ]/g,"");
        question = question.replace('()','（）');
        db.run("INSERT INTO sxs_question (type, level, content, answer) " +
                "VALUES (?, ?, ?, ?);",
            [type, level, question, answer],function(error){
                if(error){
                    console.log("错误信息标题：" + data.title + "  --error:" + error);
                }
                console.log('添加结束-----------');
            });
    },
    updateQuestion:function(){
        db.all("SELECT id, content FROM sxs_question", function(err, rows) {
            rows.forEach(function (row) {
                var content = row.content;
                //content = content.replace(/[ ]/g,"");
                content = content.replace('()','（）');
                console.log(row.id + ": " + content);
                db.run("UPDATE sxs_question set content = ? where id = ?",
                    [content, row.id],function(error){

                    });
            });
            db.close();
        });
    }



};

module.exports = sqlite;
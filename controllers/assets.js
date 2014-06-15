// 资产相关页面controller

// controller 是直接处理请求的函数集合，函数格式为function(req, res)

var assets = require('../services/assets.js');
var sqlite = require('../services/sqlite3.js');
module.exports = {
    exc:function(req, res){
        res.render('exc', {});
    },
    excPost:function(req, res){
        res.render('exc', {});
        var allList = [];
        var title = req.body.typename;
        var typeid = req.body.typeid;
        var pageurl = req.body.pageurl;

        console.log(title +','+pageurl  +',' + typeid);


        var listTitle = [];
        var index = 0;
        var re = new RegExp("<a(?:\\s+.+?)*?\\s+href=\"([^\"]*?)\".+>(.*?)</a>");
        var pe =  /<p>.*?<\/p>/g;
        var are=/<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g;



        function handleData(poem)
        {
            allList.push(poem);
            index++;
            console.log("index:" + index + 'len:' + listTitle.length);
            if(index < listTitle.length)
            {
                loadContent(listTitle[index]);
            }
            else
            {
                listTitle = [];
                index = 0;
                sqlite.insertRows(allList);
            }
        }

        function loadFanyi(data){
            if(data.tranuri){
                assets.list("http://so.gushiwen.org" + data.tranuri)
                    .then(function(result){
                        var resultstr = result.toString();
                        var resList = resultstr.split('作者：');
                        if(resList.length > 1)
                        {
                            var res = resList[1];
                            var match = res.match(pe);
                            var trans = "";
                            if(match && match.length >1)
                            {
                                if(match[0].indexOf('译文') > -1)
                                {
                                    trans += match[0];
                                }
                                if(match[1].indexOf('注释') > -1)
                                {
                                    trans += '<\r\n>'+match[1];
                                }
                                data.trans = trans;
                            }
                        }
                        handleData(data);
                    })
                    .catch(function(){
                        console.log('error');
                    });
            }
            else
            {
                handleData(data);
            }
        }

        function loadContent(data){

            assets.list("http://so.gushiwen.org/" + data.url)
                .then(function(result){
                    var poem = {};
                    var str = result.toString();
                    var list = str.split('<span>原文：</span></p>');
                    poem.content = list[list.length - 1].split('</div>')[0].replace('\r\n            ','');
                    poem.pid = 0;
                    poem.title = data.name;
                    poem.typeid = '*'+typeid+'*';
                    poem.url = data.url.replace('/','');
                    var authorList = str.split('<span>作者：</span>');
                    poem.author = authorList[authorList.length - 1].split('</p>')[0];
//                    console.log(poem.author);
                    var authormath = poem.author.match(re);
                    if(authormath)
                    {
                        poem.author = authormath[2];
                    }
                    var tranFanyi = str.split('译文及注释</a>');
                    if(tranFanyi.length > 1)
                    {
                        var tranList = tranFanyi[0].split('<div class="son5">');
                        var tranStr = tranList[tranList.length - 1].split('"');
                        if(tranStr && tranStr.length > 1 && tranStr[1].indexOf('aspx') > 0)
                        {
                            poem.tranuri = tranStr[1];
//                            console.log(poem.tranuri);
                        }
                    }
                    loadFanyi(poem);
                })
                .catch(function(){
                    console.log('error');
                });
        }
        function loadTitle()
        {
            //sqlite.readAllRows();
            assets.list(pageurl)
                .then(function(result){
                    var str = result.toString();
                    while(are.exec(str)!=null)
                    {
                        var href = RegExp.$1;
                        if(href.indexOf('view_') > -1)
                        {
                            listTitle.push({name:RegExp.$2,url:href});//如果是RegExp.$1那么匹配的就是href里的属性了!
                        }
                    }
                    console.log('过滤出来的数量：'+listTitle.length);
                    if(listTitle && listTitle.length > 0)
                    {
                        index = 0;
                        loadContent(listTitle[0]);
                    }
                })
                .catch(function(err){
                    res.render('error');
                });
        }
        loadTitle();


    }
};

// controller 是直接处理请求的函数集合，函数格式为function(req, res)

var product = require('../services/product.js');
var sqlite = require('../services/sqlite3.js');
module.exports = {
	index:function(req, res){
        res.render('index', {});
        return;
        res.render('index', { title: 'Express' });
        var allList = [];
        var title = '清代';
        var page = 1;//1
        var totalPage = 58;//38
        var listTitle = [];
        var index = 0;
        var re = new RegExp("<a(?:\\s+.+?)*?\\s+href=\"([^\"]*?)\".+>(.*?)</a>");
        var pe =  /<p>.*?<\/p>/g;
        function handleData(poem)
        {
            allList.push(poem);
            index++;
            console.log(page + "----index:" + index + 'len:' + listTitle.length);
            if(index < listTitle.length)
            {
                loadContent(listTitle[index]);
            }
            else
            {
                listTitle = [];
                index = 0;
                page++;
                if(page <= totalPage)
                {
                    loadTitle();
                }
                else
                {
//                    console.log(allList.length);
                    sqlite.insertRows(allList);
//                    sqlite.readAllRows();
                }
            }
        }

        function loadFanyi(data){
            if(data.tranuri){
                product.list("http://so.gushiwen.org" + data.tranuri)
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

            product.list("http://so.gushiwen.org/" + data.url)
                .then(function(result){
                    var poem = {};
                    var str = result.toString();
                    var list = str.split('<span>原文：</span></p>');
                    poem.content = list[list.length - 1].split('</div>')[0].replace('\r\n            ','');
                    poem.pid = 1;
                    poem.title = data.name;
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
            product.list("http://so.gushiwen.org/type.aspx?p="+page+"&c=" + title)
                .then(function(result){
                    var str = result.toString();
                    var list = str.split('<div class="sons">');
                    list.shift();
                    var lastsrc = list[list.length -1];
                    list.pop();
                    list.push(lastsrc.split('<div class="pages">')[0]);
//                    console.log(list);
                    list.forEach(function (row) {
                        var rowstr = row.toString();
                        var rowresult= rowstr.split('<img')[rowstr.split('<img').length - 1].match(re);
                        if(rowresult)
                        {
//                        console.log(rowresult);
                            listTitle.push({name:rowresult[2],url:rowresult[1]});
                        }
                    });
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
	},
    indexPost:function(req, res){
        res.render('index', {});

        var allList = [];
        var title = req.body.typename;
        var page = req.body.pagestart;//1
        var totalPage = req.body.pageend;//1
        var typeid = req.body.typeid;

        console.log(title +','+ page + ','+totalPage  +',' + typeid);
        var listTitle = [];
        var index = 0;
        var re = new RegExp("<a(?:\\s+.+?)*?\\s+href=\"([^\"]*?)\".+>(.*?)</a>");
        var pe =  /<p>.*?<\/p>/g;
        function handleData(poem)
        {
            allList.push(poem);
            index++;
            console.log(page + "----index:" + index + 'len:' + listTitle.length);
            if(index < listTitle.length)
            {
                loadContent(listTitle[index]);
            }
            else
            {
                listTitle = [];
                index = 0;
                page++;
                if(page <= totalPage)
                {
                    loadTitle();
                }
                else
                {
//                    console.log(allList.length);
                    sqlite.insertRows(allList);
//                    sqlite.readAllRows();
                }
            }
        }

        function loadFanyi(data){
            if(data.tranuri){
                product.list("http://so.gushiwen.org" + data.tranuri)
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

            product.list("http://so.gushiwen.org/" + data.url)
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
            product.list("http://so.gushiwen.org/type.aspx?p="+page+"&t=" + title)
                .then(function(result){
                    var str = result.toString();
                    var list = str.split('<div class="sons">');
                    list.shift();
                    var lastsrc = list[list.length -1];
                    list.pop();
                    list.push(lastsrc.split('<div class="pages">')[0]);
//                    console.log(list);
                    list.forEach(function (row) {
                        var rowstr = row.toString();
                        var rowresult= rowstr.split('<img')[rowstr.split('<img').length - 1].match(re);
                        if(rowresult)
                        {
//                        console.log(rowresult);
                            listTitle.push({name:rowresult[2],url:rowresult[1]});
                        }
                    });
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

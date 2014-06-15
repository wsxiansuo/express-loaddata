// 封装request请求，将callback方式改为promise的方式，options参数参考request库
// request库
var when = require('when');
var request = require('request');
var _ = require('underscore');

var http = {

	getOptions:function(options,method){
		if(_.isString(options)){
			return {
				uri:options,
				method:method
			};
		}
		options.method = method;
		return options;
	},

	// 请求入口，封装Promise调用
	request:function(options){
		console.log( options);
		var deferred = when.defer();
		var resolver = deferred.resolver;
		request(options,function(err,response,body){
			if(!err && response.statusCode == 200){
				resolver.resolve(body);
			}else{
				resolver.reject(err);
			}
		});
		return deferred.promise;
	},

	// suger方法

	get:function(options){
		options = this.getOptions(options,'GET');
		return this.request(options);
	},

	getJson:function(options){
		return this.get(options).then(function(body){
			return JSON.parse(body);
		});
	},

	post:function(options,form){
		options = this.getOptions(options,'POST');
    options.form = form;
		return this.request(options);
	},

	postJson:function(options,form){
		return this.post(options,form).then(function(body){
			return JSON.parse(body);
		});
	}
};

module.exports = http;
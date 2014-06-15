var http = require('./http');

var product = {
	list:function(url){
		return http.get(url);
	},
	detail:function(code){
		var url = domain + '/fix/' + code;
		return http.getJson(url);
	}
};

module.exports = product;
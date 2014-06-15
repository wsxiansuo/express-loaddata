var http = require('./http');

var assets = {
    list:function(url){
        return http.get(url);
    }
};

module.exports = assets;
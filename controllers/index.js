var product = require('./product');
var assets  = require('./assets');
var edit  = require('./edit');

var controller = {
	product:product,
	assets:assets,
    edit:edit
};

module.exports = controller;
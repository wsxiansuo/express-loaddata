var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var controller = require('./controllers');

var app = express();


// 设置view目录为views，渲染引擎为ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('rxhui moblie pay'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', controller.product.index);
app.post('/', controller.product.indexPost);
app.get('/exc', controller.assets.exc);
app.post('/exc', controller.assets.excPost);
app.get('/edit', controller.edit.edit);
app.post('/edit', controller.edit.editPost);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'dev' || app.get('env') === 'staging') {
    app.use(function(err, req, res, next) {
        res.render('error_dev', {
            message: err.message,
            error: err
        });
    });
}else if(app.get('env') === 'production'){
    app.use(function(err, req, res, next) {
        res.render('error');
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

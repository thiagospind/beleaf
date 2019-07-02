var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressSession({
    secret: '9Swj3p0YaEhjmFX',
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next) {
    res.locals.usuario = req.session.usuario;
    res.locals.autorizado = req.session.autorizado;
    next();
});

consign({cwd: process.cwd()})
.include('app/routes')
.then('config/dbConnection.js')
.then('app/controllers')
.then('app/models')
.into(app);

module.exports = app;
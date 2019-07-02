var mysql = require('mysql');

var connMysql = function(){
    return mysql.createConnection({
        // host: 'us-cdbr-iron-east-02.cleardb.net',
        // user: 'b9f99e3c431ba4',
        // password: '4aaab0cd',
        // database: 'heroku_1bcba7123abcd1f'
        host: 'localhost',
        user: 'root',
        password: 'aapvr',
        database: 'beleaf'
    });
}


module.exports = function(){
    return connMysql;
}

const bcrypt = require('bcrypt');

module.exports.login = function (application, req, res) {
    res.render("login", {erros: {}});
}

module.exports.autenticar = function (application, req, res) {
    var login = req.body;

    var connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.getUsuario(login, function(error,result){

        console.log('0');
        if(error){
            console.log(error);
            return res.render('login',{erros: error});
        } else if(result.length == 0){
            console.log('2');
            return res.render('login',{erros: {}, msg: 'Usuario não encontrado!'});
        } else if(result.length > 0) {
            console.log('3');
            console.log('senha login: '+login.senha);
            console.log('senha bd: '+result[0].senha);
            bcrypt.compare(login.senha, result[0].senha, function (err,snsenha) {
                if(snsenha == true){
                    req.session.autorizado = true;
                    req.session.usuario = result[0].login;
                    return res.redirect('/')
                } else {
                    return res.render('login',{erros: {}, msg: 'Senha incorreta!'});
                }
            });
        }
    });
}

const bcrypt = require('bcrypt');

module.exports.login = function (application, req, res) {
    res.render("login", {erros: {}});
}

module.exports.autenticar = function (application, req, res) {
    var login = req.body;

    var connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.getUsuario(login, function(error,result){
        if(error){
            return res.render('login',{erros: error});
        } else if(result.length == 0){
            return res.render('login',{erros: {}, msg: 'Usuario não encontrado!'});
        } else if(result.length > 0) {
            bcrypt.compare(login.senha, result[0].senha, function (err,snsenha) {
                if(snsenha == true){
                    req.session.autorizado = true;
                    req.session.usuario = result[0].login;
                    return res.redirect('/')
                } else {
                    req.session.autorizado = false;
                    return res.render('login',{erros: {}, msg: 'Senha incorreta!'});
                }
            });
        }
    });
}

module.exports.logout = function (application, req, res) {
    req.session.destroy();
    res.redirect('/marmitas');
}
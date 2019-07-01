function UsuarioDAO(connection){
    this._connection = connection;
}

UsuarioDAO.prototype.getUsuario = function(usuario, callback) {

    var sql = "select login, senha from usuario where login = "
                +this._connection.escape(usuario.login)+"";
    this._connection.query(sql, callback);
}

module.exports = function(){
    return UsuarioDAO;
}
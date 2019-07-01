function MarmitasDAO(connection){
    this._connection = connection;
}

MarmitasDAO.prototype.getMarmitas = function(callback) {
    var sql = 'select id, nome, descricao, round(preco,2) as preco, lista_ingredientes, quantidade, '+
              'url_imagem, porcentagem_desconto, round(preco*((100-porcentagem_desconto)/100),2) as preco_desconto '+
              'from marmita where quantidade > 0';
    this._connection.query(sql, callback);
}    

MarmitasDAO.prototype.getMarmita = function(query, callback) {
    var sql = 'select id, nome, descricao, round(preco,2) as preco, lista_ingredientes, quantidade, '+
        'url_imagem, porcentagem_desconto, round(preco*((100-porcentagem_desconto)/100),2) as preco_desconto '+
        'from marmita where id = ' + query.id;
    this._connection.query(sql,callback);
}

MarmitasDAO.prototype.salvarMarmita = function(marmita, callback) {
    this._connection.query('insert into marmita set ?', marmita, callback);
}

MarmitasDAO.prototype.atualizarMarmita = function(marmita, callback) {
    this._connection.query('update marmita set ?', marmita, callback);
}

module.exports = function(){   

    return MarmitasDAO;
}
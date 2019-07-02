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
    var sql = 'update marmita set '+
        'nome = ?, descricao = ?, preco = ?, lista_ingredientes = ?, quantidade = ?, '+
        'url_imagem = ?, porcentagem_desconto = ? where id = ?';
    var dados = [
        marmita.nome,
        marmita.descricao,
        marmita.preco,
        marmita.lista_ingredientes,
        marmita.quantidade,
        marmita.url_imagem,
        marmita.porcentagem_desconto,
        marmita.id
    ]
    this._connection.query(sql, dados, callback);
}

module.exports = function(){   

    return MarmitasDAO;
}
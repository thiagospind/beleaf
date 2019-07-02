
module.exports.cadastrarMarmita = function(application,req, res) {
    res.render("cadastrarMarmita", {erros:{}, marmita:{} });
}

module.exports.salvarMarmita = function (application,req, res) {
    var marmita = req.body;

    var connection = application.config.dbConnection();
    var marmitaModel = new application.app.models.MarmitaDAO(connection);

    marmitaModel.salvarMarmita(marmita, function(error,result){
        console.log(error);
        if(!error){
            res.redirect("/marmitas");
        }
        res.send(result);
    });
}

module.exports.atualizarMarmita = function (application, req, res) {
    var marmita = req.body;
    console.log(marmita);
    var connection = application.config.dbConnection();
    var marmitaModel = new application.app.models.MarmitaDAO(connection);

    marmitaModel.atualizarMarmita(marmita, function(error,result){
        console.log(error);
        if(!error){
            return res.redirect("/marmitas");
        }
        res.send(result);
    });
}

module.exports.editarMarmita = function (application,req, res) {

    var query = req.query;

    var connection = application.config.dbConnection();
    var marmitaModel = new application.app.models.MarmitaDAO(connection);

    marmitaModel.getMarmita(query,function(error, result){
        if(!error) {
            return res.render("editarMarmita", {marmita: result, erros: {}});
        } else {
            console.log(error);
        }
    });
}

module.exports.excluirMarmita = function (application,req, res) {

    var query = req.query;

    var connection = application.config.dbConnection();
    var marmitaModel = new application.app.models.MarmitaDAO(connection);

    marmitaModel.excluirMarmita(query,function(error, result){
        if(!error) {
            return res.redirect('/marmitas');
        } else {
            console.log(error);
        }
    });
}

module.exports.mostraMarmitas = function (application, req, res) {
    var connection = application.config.dbConnection();
    var marmitasModel = new application.app.models.MarmitaDAO(connection);
    var query = req.query;
    marmitasModel.getMarmitas(query,function(error, result){
        res.render("marmitas", {marmitas: result});
    });
}


module.exports.mostraMarmita = function (application, req, res) {
    var connection = application.config.dbConnection();
    var marmitasModel = new application.app.models.MarmitaDAO(connection);
    var query = req.query;
    marmitasModel.getMarmita(query,function(error, result){
        if(!error) {
            res.render("marmita", {marmitas: result});
        } else {
            console.log(error);
        }
    });
}
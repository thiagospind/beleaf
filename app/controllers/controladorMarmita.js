
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

module.exports.mostraMarmitas = function (application, req, res) {
    var connection = application.config.dbConnection();
    var marmitasModel = new application.app.models.MarmitaDAO(connection);

    marmitasModel.getMarmitas(function(error, result){
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
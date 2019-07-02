module.exports = function(application){
    const { check, validationResult } = require('express-validator');

    application.get('/login',function(req,res){
        application.app.controllers.controladorLogin.login(application, req, res);
    });

    application.post('/login',
        [
            check('login', 'Informe o login!').not().isEmpty(),
            check('senha', 'Informe a senha!').not().isEmpty(),
        ],function(req,res){

        var errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.render('login', {erros: errors.array()});
        }
        application.app.controllers.controladorLogin.autenticar(application, req, res);
    });

    application.get('/sair', function(req, res) {
        application.app.controllers.controladorLogin.logout(application, req, res);
    });
}
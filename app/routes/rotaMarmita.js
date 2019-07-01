module.exports = function(application){

    const { check, validationResult } = require('express-validator');

    application.get('/marmita/novo',function(req,res){
        application.app.controllers.controladorMarmita.cadastrarMarmita(application, req, res);
    });

    application.post('/marmita/novo',[
            check('nome','O nome da marmita não pode ser nula!').not().isEmpty(),
            check('nome','A quantidade de caracteres do nome deve ser entre 5 e 255 caracteres!').isLength({min: 5, max:255}),
            check('descricao','A descrição da marmita não pode ser nula!').not().isEmpty(),
            check('preco','O preço da marmita não pode ser nulo!').not().isEmpty(),
            check('preco','Informe um valor válido para o preço da marmita').isFloat({locale: 'pt-BR'}),
            check('lista_ingredientes','Os ingredientes da marmita não podem ser nulos!').not().isEmpty(),
            check('quantidade','A quantidade da marmita não pode ser nula!').not().isEmpty(),
            check('url_imagem','A URL da imagem da marmita não pode ser nula!').not().isEmpty(),
            check('url_imagem','A quantidade de caracteres da URL da imagem deve ser entre 5 e 255 caracteres!').isLength({min: 5, max:255}),
        ],function(req, res){
            const errors = validationResult(req);
            var marmita = req.body;
            console.log(errors.array());
            if(!errors.isEmpty()){
                return res.render('cadastrarMarmita',{ erros: errors.array(), marmita: marmita });
            }
            application.app.controllers.controladorMarmita.salvarMarmita(application,req,res);
    });

    application.get('/',function(req,res) {
        application.app.controllers.controladorMarmita.mostraMarmitas(application, req, res);
    });

    application.get('/marmitas',function(req,res) {
        application.app.controllers.controladorMarmita.mostraMarmitas(application, req, res);
    });

    application.get('/marmita',function(req,res) {
        application.app.controllers.controladorMarmita.mostraMarmita(application, req, res);
    });
}
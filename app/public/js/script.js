// $('#btnCadastrar').click(function () {
//
//     $.ajax({
//         url: '/marmita/novo',
//         type: 'POST',
//         cache: false,
//         data: {
//             nome: $('#nome').val(),
//             descricao: $('#descricao').val(),
//             preco: $('#preco').val(),
//             lista_ingredientes: $('#lista_ingredientes').val(),
//             quantidade: $('#quantidade').val(),
//             url_imagem: $('#url_imagem').val(),
//             porcentagem_desconto: $('#porcentagem_desconto').val()
//         },
//         success: function () {
//             $('#error-group').css('display', 'none');
//             //alert('Marmita Cadastrada com Sucesso');
//         },
//         error: function (data) {
//             alert('erro');
//             $('#error-group').css('display', 'block');
//             var errors = JSON.parse(data.responseText);
//             var errorsContainer = $('#errors');
//             errorsContainer.innerHTML = '';
//             var errorsList = '';
//
//             for (var i = 0; i < errors.length; i++) {
//                 errorsList += '<li>' + errors[i].msg + '</li>';
//             }
//             errorsContainer.html(errorsList);
//         }
//     });
// });
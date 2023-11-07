$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Informe o seu nome',
            email: 'Informe seu e-mail',
            mensagem: 'Informe a mensagem'
        },
        submitHandler: function(form){

        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){

            }
        }
    })

    

})
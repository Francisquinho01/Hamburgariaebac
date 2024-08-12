$(document).ready(function () {

    $('#Car').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
    $('.Menu').click(function () {

        $('nav').slideToggle();


    })
    $('#Tel').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
$('.Z').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            end: {
                required: true
            },
            tel: {
                required: true,
                minlength: 14 
            },
            pedido: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome"
            },
            cpf: {
                required: "Por favor, insira o CPF"
            },
            end: {
                required: "Por favor, insira o endereço"
            },
            tel: {
                required: "Por favor, insira o telefone",
                minlength: "Por favor, insira um telefone válido"
            },
            pedido: {
                required: "Por favor, insira o pedido"
            }
        },
        submitHandler: function (form) {
           
          
            event.preventDefault();
            $('#ka').show();
            form.reset(); 
        }
    });

    $('#pio').on('click', function() {
       
        $('#pio').on('click', function() {
           
            $('#form').toggle();
        });
    });


})
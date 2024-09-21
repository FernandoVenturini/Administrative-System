$(function() { // Criando uma funcao para o botao menu mobile
    $('.menu-btn').click(function() { // Acessando a div(menu-btn) quando for clicada
        $('.navbar .menu').toggleClass("active"); //Acessando a div(navbar e menu) para ativar o aparecimento do menu
        $('.menu-btn i').toggleClass("active");
    })
})
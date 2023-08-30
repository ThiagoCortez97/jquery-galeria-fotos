$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem} title="Ver Imagem em Tamanho real target="_blank">
                Ver Imagem em Tamanho Real
            </a>
        </div>`
        
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);
        $('#endereco-imagem-nova').val('')
    })
})


// o Jquery é iniciado através da tag $(document).ready(funciton() {}), então tudo que depender do jquery será colocado nesse escopo.
// Para selecionarmos um item através do jquery é só usar o $('header button'), nesse caso o código fica bem mais enxuto.
// Podemos selecionar qualquer elemento do nosso html atráves dessa tag do jquery $('')
// Atráves do jquery vamos ao clicar no botão expandir nosso formulário. Através do .click
// $('form').on('submit', function(e){
//    e.preventDefault()
//}) utilizamos essa função para retirar o efeito de submeter do botão.
// Para expandir o nosso formulário utilizamos a tag "slideDown".
// Já para recolher o formulário quando clicamos no botão cancelar, usamos a tag "slideUp"
// No JS para recuperar o valor de id nós utilizamos o .value, já no jquery utilizamos o .val().
// Criamos a função do appendTo para adicionarmos a imagem que queremos no li, ou seja, na página web.
// para deixar o campo vazio após adicionar a imagem, basta apenas seguir o que está na linha 25
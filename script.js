const botaoMostraPalavra = document.querySelector("#botao-palavrachave");

botaoMostraPalavra.addEventListener( 'click',mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto =document.querySelector("#entrada-de-texto").value;
    const campoResultado =document.querySelector("#resultado-Palavrachave");
    const palavrasChave = processaTexto(texto);

     campoResultado.textContent = palavrasChave.join(" , ");
}

function processaTexto(texto){
let palavras = texto.split(" ");
return palavras;

}
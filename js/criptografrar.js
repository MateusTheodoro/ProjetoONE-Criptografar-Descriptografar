/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

// botão criptografar
var botaoCriptografar = document.querySelector('#btn-cripto')
botaoCriptografar.addEventListener('click', function (event) {
  event.preventDefault()

  // seleciona o texto
  var cripto = document.querySelector('#form-cripto')
  var textoCripto = cripto['input-texto'].value

  // joga o texto na mensagem criptografada
  var textoColado = document.querySelector('#msg')
  textoColado.value = textoCripto
    .replace(/[e\é\è\ê]/gi, 'enter')
    .replace(/[i\ì\í\î]/gi, 'imes')
    .replace(/[a\à\á\â]/gi, 'ai')
    .replace(/[o\ò\ó\ô]/gi, 'ober')
    .replace(/[u\ù\ó\ô]/gi, 'ufat')
    .toLowerCase()
})

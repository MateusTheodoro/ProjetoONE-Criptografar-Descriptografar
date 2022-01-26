/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
var botaoDescriptografar = document.querySelector('#btn-descripto')
botaoDescriptografar.addEventListener('click', function (event) {
  event.preventDefault()

  // seleciona o texto
  var cripto = document.querySelector('#form-cripto')
  var textoCripto = cripto['input-texto'].value

  // joga o texto na mensagem pra descriptografar
  var textoColado = document.querySelector('#msg')
  textoColado.value = textoCripto
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
    .toLowerCase()
})

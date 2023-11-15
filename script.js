const bt = document.querySelector('button')
const num1 = document.querySelector('#num1')
const operador = document.querySelector('#operador')
const num2 = document.querySelector('#num2')
const igual = document.querySelector('#igual')
const resp = document.querySelector('#resultado')
const sobra = document.querySelector('#sobra')

bt.onclick = function() {
  sobra.style = 'display: none;'
  var n1 = parseInt(window.prompt('Digite o primeiro número:'))
  num1.innerHTML = n1
  var op = window.prompt('Digite: +, -, / ou *')
  operador.innerHTML = op
  var n2 = parseInt(window.prompt('Digite o segundo número:'))
  igual.innerHTML = '='
  num2.innerHTML = n2


  if (!op || !n1 || !n2) {
    
    alert('Digite os numeros e operadores corretamente')
    num1.innerHTML = ""
    operador.innerHTML = ""
    num2.innerHTML = ""
    igual.innerHTML = ""
    resp.innerHTML = ""

  } else {
    if (op == '+') {
      resposta = n1 + n2
    } else if(op == '-') {
      resposta = n1 - n2
    } else if (op == '/') {
      if(n1 < n2) {
        resposta = n1 / n2
      } else {

        resposta = parseInt(n1 / n2)
        resto = n1 % n2
        sobra.style = 'display: block;'
        sobra.innerHTML = `Sobra: ${resto}`
      }
    } else if (op == '*') {
      resposta = n1 * n2
    } else {
      alert('Operador incorreto! Opções válidas: +, -, * ou /')
      num1.innerHTML = ""
      operador.innerHTML = ""
      num2.innerHTML = ""
      igual.innerHTML = ""
      resp.innerHTML = ""
    }

    resp.innerHTML = resposta

  }

  //var resp.innerHTML = n1 + nota2 + nota3
  var mensagem = `A média das notas ${nota1}, ${nota2} e ${nota3} é igual a ${media}`
 
  console.log(mensagem)

  resp.innerHTML = mensagem

}

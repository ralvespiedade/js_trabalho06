// Função tradicional sem parâmetros
function saudacao() {
  console.log("**** CALCULADORA QUE SÓ MULTIPLICA ****")
}

saudacao() // Chamando a função saudacao

// Função tradicional com parâmetros e retorno
function soma(a, b) {
  return a + b
}

var resultado = soma(5, 3) // Chamando a função soma e armazenando o resultado
console.log("O resultado da soma é:", resultado)

// Arrow function com parâmetros e retorno
const multiplicacao = (x, y) => {
  return x * y
}

let resultadoMultiplicacao = multiplicacao(4, 6) // Chamando a arrow function multiplicacao e armazenando o resultado
console.log("O resultado da multiplicação é:", resultadoMultiplicacao)

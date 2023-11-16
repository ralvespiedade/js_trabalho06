const banco = {
  conta: "123456",
  saldo: 1000,
  tipoDeConta: "corrente",
  agencia: "7890",

  buscarSaldo: function () {
    return this.saldo
  },

  deposito: function (valor) {
    this.saldo += valor
    return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`
  },

  saque: function (valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente para saque."
    } else {
      this.saldo -= valor
      return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`
    }
  },

  numeroDaConta: function () {
    return this.conta
  }
}

// Testando os métodos do objeto banco
console.log("Saldo atual:", banco.buscarSaldo())
console.log(banco.deposito(500))
console.log(banco.saque(300))
console.log("Número da conta:", banco.numeroDaConta())

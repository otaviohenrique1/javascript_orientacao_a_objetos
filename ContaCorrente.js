export class ContaCorrente {
  #agencia;
  #cliente;
  #saldo = 0;

  setCliente(cliente) {
    this.#cliente = cliente;
  }

  getCliente() {
    return this.#cliente;
  }

  setAgencia(agencia) {
    this.#agencia = agencia;
  }

  getAgencia() {
    return this.#agencia;
  }

  saque(valor) {
    if (this.#saldo <= valor) {
      return;
    }
    this.#saldo -= valor;
    // return valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.#saldo += valor;
  }

  extrato() {
    return this.#saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }
}
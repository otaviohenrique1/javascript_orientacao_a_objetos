export class ContaCorrente {
  agencia;
  #saldo = 0;

  saque(valor) {
    if (this.#saldo <= valor) {
      return;
    }
    this.#saldo -= valor;
    return valor;
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
}
class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  saque(saldo) {
    if (this.#saldo >= saldo) {
      this.#saldo -= saldo;
    } else {
      console.log("Valor invalido");
    }
  }

  depositar(saldo) {
    if (saldo > 0) {
      this.#saldo += saldo;
    } else {
      console.log("Valor invalido");
    }
  }

  extrato() {
    console.log(this.#saldo);
  }
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11222222111;
console.log(cliente1);

const cliente1ContaCorrente = new ContaCorrente()
console.log(cliente1ContaCorrente);
cliente1ContaCorrente.agencia = 1001;
cliente1ContaCorrente.depositar(1000);
cliente1ContaCorrente.extrato();
cliente1ContaCorrente.saque(100);
cliente1ContaCorrente.extrato();
// cliente1ContaCorrente.saque(10000);
// cliente1ContaCorrente.depositar(-1000);

// const cliente2 = new Cliente()
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

// const cliente2ContaCorrente = new ContaCorrente()
// cliente2ContaCorrente.agencia = 1001;
// cliente2ContaCorrente.saldo = 0;

// console.log(cliente2);
// console.log(cliente2ContaCorrente);
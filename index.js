import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11222222111;
console.log(cliente1);

const cliente1ContaCorrente = new ContaCorrente()
console.log(cliente1ContaCorrente);
cliente1ContaCorrente.agencia = 1001;
console.log(cliente1ContaCorrente.depositar(1000));
console.log(cliente1ContaCorrente.extrato());
console.log(cliente1ContaCorrente.saque(100));
console.log(cliente1ContaCorrente.extrato());
// console.log(cliente1ContaCorrente.saque(10000));
// console.log(cliente1ContaCorrente.depositar(-1000));

// const cliente2 = new Cliente()
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

// const cliente2ContaCorrente = new ContaCorrente()
// cliente2ContaCorrente.agencia = 1001;
// cliente2ContaCorrente.saldo = 0;

// console.log(cliente2);
// console.log(cliente2ContaCorrente);
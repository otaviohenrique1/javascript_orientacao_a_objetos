import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11222222111;

const cliente1ContaCorrente = new ContaCorrente()
cliente1ContaCorrente.setAgencia(1001);
cliente1ContaCorrente.setCliente(cliente1);
cliente1ContaCorrente.depositar(1000);
// console.log(cliente1ContaCorrente.extrato());
// cliente1ContaCorrente.saque(100);
// console.log(cliente1ContaCorrente.extrato());
// console.log(cliente1ContaCorrente.getAgencia());
// console.log(cliente1ContaCorrente.getCliente());

// console.log(cliente1ContaCorrente.saque(10000));
// console.log(cliente1ContaCorrente.depositar(-1000));

const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const cliente2ContaCorrente = new ContaCorrente()
cliente2ContaCorrente.setAgencia(1001);
cliente2ContaCorrente.setCliente(cliente2);

cliente1ContaCorrente.transferir(100, cliente2ContaCorrente);
console.log(cliente1ContaCorrente.extrato());
console.log(cliente2ContaCorrente.extrato());

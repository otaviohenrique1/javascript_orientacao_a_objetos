import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11222222111);

// const cliente1 = new Cliente()
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11222222111;

const cliente1ContaCorrente = new ContaCorrente(1001, cliente1)
// cliente1ContaCorrente.setAgencia(1001);
// cliente1ContaCorrente.setCliente(cliente1);
// cliente1ContaCorrente.cliente = cliente1;
cliente1ContaCorrente.depositar(1000);
console.log("Extrato cliente1 => " + cliente1ContaCorrente.extrato());
// console.log(cliente1ContaCorrente.extrato());
// cliente1ContaCorrente.saque(100);
// console.log(cliente1ContaCorrente.extrato());
console.log("agencia => " + cliente1ContaCorrente.agencia);
// console.log(cliente1ContaCorrente.getAgencia());
// console.log(cliente1ContaCorrente.getCliente());
// console.log(cliente1ContaCorrente.cliente);
console.log("nome => " + cliente1ContaCorrente.cliente.nome);
console.log("cpf => " + cliente1ContaCorrente.cliente.cpf);

// console.log(cliente1ContaCorrente.saque(10000));
// console.log(cliente1ContaCorrente.depositar(-1000));

const cliente2 = new Cliente("Alice", 88822233309);
// const cliente2 = new Cliente()
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const cliente2ContaCorrente = new ContaCorrente(1001, cliente2)
// cliente2ContaCorrente.setAgencia(1001);
// cliente2ContaCorrente.setCliente(cliente2);
// cliente2ContaCorrente.cliente = cliente2;

cliente1ContaCorrente.transferir(100, cliente2ContaCorrente);
// console.log("Extrato cliente1 => " + cliente1ContaCorrente.extrato());
console.log("Extrato cliente1 => " + cliente1ContaCorrente.saldo);
console.log("Extrato cliente2 => " + cliente2ContaCorrente.extrato());

console.log("agencia => " + cliente2ContaCorrente.agencia);
// console.log(cliente2ContaCorrente.getAgencia());
// console.log(cliente2ContaCorrente.getCliente());
console.log("nome => " + cliente2ContaCorrente.cliente.nome);
console.log("cpf => " + cliente2ContaCorrente.cliente.cpf);

console.log("numeroDeContas => " + ContaCorrente.numeroDeContas);

export class Cliente {
  nome;
  #cpf;

  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }

  get nome() {
    return this.nome;
  }

  get cpf() {
    return this.#cpf;
  }
}
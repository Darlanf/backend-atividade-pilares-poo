import { Departamento } from "./departamento";

// 4. Crie as seguintes classes:

// a. Crie uma classe chamada Universidade, que terá como atributos: nome e local.
// Além disso, deve possuir um método construtor e métodos para encapsulamento dos seus atributos.

// b. Uma classe chamada Pessoa, com os atributos: nome e data de nascimento (que pode ser String).
// Assim como na outra classe, crie um método construtor e métodos para encapsulamento de seus atributos.

// c. Cada pessoa poderá estar associada a uma universidade.

// d. A classe pessoa deve possuir um método que informe seus atributos e a universidade em que trabalha.

export class Universidade {
  public nome: string;
  public local: string;
  public departamentos?: Departamento[];

  constructor(nome: string, local: string) {
    this.nome = nome;
    this.local = local;
  }

  incluirDepto(departamento: Departamento) {
    if (!this.departamentos) {
      this.departamentos = [];
      this.departamentos.push(departamento);
    } else {
      this.departamentos.push(departamento);
    }
  }
}

export class Pessoa {
  private _universidade?: Universidade;
  private _departamento?: Departamento;

  constructor(
    private _nome: string,
    private _nascimento: string
  ) {
    this._nome = _nome;
    this._nascimento = _nascimento;
  }

  public set universidade(
    universidade: Universidade
  ) {
    this._universidade = universidade;
  }
  public set departamento(
    departamento: Departamento
  ) {
    this._departamento = departamento;
  }
}

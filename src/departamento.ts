// 5. Baseando-se na Atividade 4, crie uma classe Departamento, que possui o atributo nome.
// A classe deve possuir um construtor e métodos de encapsulamento.
// A Universidade deve estar composta por vários departamentos.
// Adapte também a classe Pessoa para que ela tenha uma referência ao Departamento onde trabalha,
// ou seja, deve possuir uma associação com a classe Departamento.

export class Departamento {
  constructor(private _nome: string) {
    this._nome = _nome;
  }
}

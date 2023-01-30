// 1. Crie uma classe abstrata chamada Ingresso que possui um valor em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor adicional.
// Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um valor adicional.
// Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.

export abstract class Ingresso {
  valor: number;

  constructor() {
    this.valor = 50;
  }

  imprimeValor() {
    console.log(
      `O preço do ingresso é R$ ${this.valor}\n`
    );
  }
}

export class Normal extends Ingresso {}

export class VIP extends Ingresso {
  valorVip: number;

  constructor() {
    super();
    this.valorVip = 150;
    this.valorVip += this.valor;
  }

  imprimeValor() {
    console.log(
      `O preço do ingresso VIP é R$ ${this.valorVip}\n`
    );
  }
}

export class Camarote extends Ingresso {
  valorCamarote: number;

  constructor() {
    super();
    this.valorCamarote = 450;
    this.valorCamarote += this.valor;
  }

  imprimeValor() {
    console.log(
      `O preço do ingresso do camarote é R$ ${this.valorCamarote}\n`
    );
  }
}

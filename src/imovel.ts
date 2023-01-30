// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional no preço.
// Crie métodos de acesso e impressão deste valor adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto no preço.
// Crie métodos de acesso e impressão para este desconto.

export class Imovel {
  endereço: string;
  preço: number;

  constructor(endereço: string, preço: number) {
    this.endereço = endereço;
    this.preço = preço;
  }
}

export class Novo extends Imovel {
  preçoAdicional: number;
  preçoAtual: number;

  constructor(
    valorAdicional: number,
    endereço: string,
    preço: number
  ) {
    super(endereço, preço);
    this.preçoAdicional = valorAdicional;
    this.preçoAtual = this.preço + valorAdicional;
    this.endereço;
  }
}
export class Velho extends Imovel {
  descontoPreço: number;
  preçoAtual: number;

  constructor(
    descontoPreço: number,
    endereço: string,
    preço: number
  ) {
    super(endereço, preço);
    this.descontoPreço = descontoPreço;
    this.preçoAtual = preço - descontoPreço;
    this.endereço;
  }
}

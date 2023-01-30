// 3. Dado o seguinte diagrama: animal - cachorro / animal - gato / animal - cavalo

// Identifique os atributos e comportamentos que são comuns entre os 3 animais e
// encapsule-os na superclasse Animal. Crie pelo menos 1 comportamento diferente para cada animal.

export class Animal {
  nome: string;
  raça: string;
  idade: number;
  vacinado: boolean;
  castrado: boolean;

  constructor(
    nome: string,
    raça: string,
    idade: number
  ) {
    (this.nome = nome),
      (this.raça = raça),
      (this.idade = idade),
      (this.vacinado = false),
      (this.castrado = false);
  }

  alimentar() {
    console.log(`${this.nome} foi alimentado`);
  }

  vacinar() {
    if (!this.vacinado) {
      this.vacinado = true;
      console.log(`${this.nome} vacinado`);
    } else {
      console.log(`${this.nome} já foi vacinado`);
    }
  }

  castrar() {
    if (!this.castrado) {
      this.castrado = true;
      console.log(`${this.nome} castrado!`);
    } else {
      console.log(
        `${this.nome} já foi castrado!`
      );
    }
  }
}

export class Cachorro extends Animal {
  feroz!: boolean;

  colocarColeira() {
    if (this.feroz) {
      console.log("Coleira colocada");
    }
  }
}
export class Cavalo extends Animal {
  competidor!: boolean;

  cavalgar() {
    if (this.competidor) {
      console.log("Pronto para cavalgar");
    }
  }
}
export class Gato extends Animal {
  peludo!: boolean;

  tosar() {
    if (this.peludo) {
      this.peludo = false;
      console.log("Animal tosado");
    }
  }
}

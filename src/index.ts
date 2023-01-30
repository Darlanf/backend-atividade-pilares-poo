import {
  Animal,
  Cachorro,
  Cavalo,
  Gato,
} from "./animal";
import { Departamento } from "./departamento";
import { Imovel, Novo, Velho } from "./imovel";
import {
  Camarote,
  Ingresso,
  Normal,
  VIP,
} from "./ingresso";
import {
  Pessoa,
  Universidade,
} from "./universidade";

console.log("\n ======> Exercicio #1 <====== \n");

let ingressoComum = new Normal();
ingressoComum.imprimeValor();

let ingressoVIP = new VIP();
ingressoVIP.imprimeValor();

let ingressoCamarote = new Camarote();
ingressoCamarote.imprimeValor();

console.log("======> Exercicio #2 <======");

let casa = new Imovel("Rua A", 1000);
console.log(casa);

let casaNova = new Novo(1000, "Rua B", 1000);
console.log(casaNova);

let casaVelha = new Velho(500, "Rua C", 2000);
console.log(casaVelha);

console.log("======> Exercicio #3 <======");

let animalA = new Animal("Teste", "testando", 10);

console.log(animalA);

animalA.alimentar();
console.log(
  `${animalA.nome} foi vacinado? ${animalA.vacinado}`
);
animalA.vacinar();
console.log(
  `${animalA.nome} foi castrado? ${animalA.castrado}`
);
animalA.castrar();
console.log(
  `${animalA.nome} vacinado? ${animalA.vacinado} castrado? ${animalA.castrado}`
);
console.log(animalA);

let cao = new Cachorro("Saori", "Chow Chow", 2);
cao.feroz = true;
console.log(cao);
cao.colocarColeira();

let gato = new Gato("Thor", "Siamês", 8);
gato.peludo = true;
console.log(gato);
gato.tosar();

let cavalo = new Cavalo(
  "Rocinante",
  "Pegasus",
  5
);
cavalo.competidor = true;
console.log(cavalo);
cavalo.cavalgar();

console.log("======> Exercicio #4 <====== \n");

const universidade1 = new Universidade(
  "UniTeste",
  "RJ"
);
console.log(universidade1, `\n`);

const pessoa1 = new Pessoa("Darlan", "1986");
console.log(pessoa1, `\n`);

pessoa1.universidade = universidade1;
console.log(pessoa1, `\n`);

console.log("======> Exercicio #5 <====== \n");

const departamentoA = new Departamento(
  "Departamento A"
);
console.log(departamentoA, `\n`);

const departamentoB = new Departamento(
  "Departamento B"
);
console.log(departamentoB, `\n`);

const pessoa2 = new Pessoa("Fulana", "1985");
console.log(pessoa2, `\n`);

pessoa1.departamento = departamentoA;
pessoa2.departamento = departamentoB;
console.log(pessoa1, `\n`, pessoa2, `\n`);

universidade1.incluirDepto(departamentoA);
universidade1.incluirDepto(departamentoB);
console.log(universidade1);

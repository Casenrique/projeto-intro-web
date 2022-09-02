//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
const nomePersonagem1 = "Dr. Charles Francis Xavier";
const identidade1 = "Professor X";
const altura1 = 1.83;
const generoMasculino1 = true;
const outrasIdentidades1 = ["\"X\"", "\"Prisioneiro M-13\"", "\"Acushla\""];

const nomePersonagem2 = "Natalia Alianovna \"Natasha\" Romanoff";
const identidade2 = "Black Widow";
const altura2 = 1.65;
const generoMasculino2 = false;
const outrasIdentidades2 = ["\"Natalie Rushman\"", "\"Tatiana Sokova\"", "\"Melina Vostokoff\""]

const nomePersonagem3 = "T'Challa";
const identidade3 = "Black Panther";
const altura3 = 1.83;
const generoMasculino3 = true;
const outrasIdentidades3 = ["\"Natalie Rushman\"", "\"Tatiana Sokova\"", "\"Melina Vostokoff\""]

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
const mediaAlturas = (altura1 + altura2 + altura3)/3;
console.log(mediaAlturas);

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
const verificaGenerosMasculinos = generoMasculino1 && generoMasculino2 && generoMasculino3;
console.log(verificaGenerosMasculinos);

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
//Criado no item 1

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
console.log(`${nomePersonagem1.toUpperCase()}
Identidade: "${identidade1}
Altura: ${altura1} m
Personagem do gênero masculino? ${generoMasculino1}
Outras Identidades: ${outrasIdentidades1}

${nomePersonagem2.toUpperCase()}
Identidade: "${identidade2}
Altura: ${altura2} m
Personagem do gênero masculino? ${generoMasculino2}
Outras Identidades: ${outrasIdentidades2}

${nomePersonagem3.toUpperCase()}
Identidade: "${identidade3}
Altura: ${altura3} m
Personagem do gênero masculino? ${generoMasculino3}
Outras Identidades: ${outrasIdentidades3}

`)
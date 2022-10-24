const personagem1 = {
    nome: "Dr. Charles Francis Xavier",
    identidade: "Professor X",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: ["\"X\"", "\"Prisioneiro M-13\"", "\"Acushla\""],
    foto: "imagem"
}

const personagem2 = {
    nome: "Natalia Alianovna \"Natasha\" Romanoff",
    identidade: "Black Widow",
    altura: 1.65,
    generoMasculino: false,
    outrasIdentidades: ["\"Natalie Rushman\"", "\"Tatiana Sokova\"", "\"Melina Vostokoff\""],
    foto: "imagem"
}

const personagem3 = {
    nome: "T'Challa",
    identidade: "Black Panther",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: ["\"Tigre de carvão\"", "\"Haramu-Sarki\"", "\"Gato do Bairro\""],
    foto: "imagem"
}

const personagens = []

const personagensMasculinos = []

if(personagem1.generoMasculino === true){
    personagensMasculinos.push(personagem1)
    // alert("Personagem adicionado à lista de personagens masculinos.")
}else{
    // alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
}
if(personagem2.generoMasculino === true){
    personagensMasculinos.push(personagem2)
    // alert("Personagem adicionado à lista de personagens masculinos.")
}else{
    // alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens masculinos.")
}

if(personagem3.generoMasculino === true){
    personagensMasculinos.push(personagem3)
    // alert("Personagem adicionado à lista de personagens masculinos.")
}else{
    // alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
}

console.log(personagensMasculinos)

//Resolução usando o IF TERNÁRIO

// personagem1.generoMasculino ? personagensMasculinos.push(personagem1) : alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
// personagem2.generoMasculino ? personagensMasculinos.push(personagem2) : alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
// personagem3.generoMasculino ? personagensMasculinos.push(personagem3) : alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")

// console.log(personagensMasculinos)

// //3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// const mediaAlturas = (altura1 + altura2 + altura3)/3;
// console.log(mediaAlturas);

// //4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// const verificaGenerosMasculinos = generoMasculino1 && generoMasculino2 && generoMasculino3;
// console.log(verificaGenerosMasculinos);

// //5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// //Criado no item 1

// //6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// console.log(`${nomePersonagem1.toUpperCase()}
// Identidade: ${identidade1}
// Altura: ${altura1} m
// Personagem do gênero masculino? ${generoMasculino1}
// Outras Identidades: ${outrasIdentidades1}

// ${nomePersonagem2.toUpperCase()}
// Identidade: ${identidade2}
// Altura: ${altura2} m
// Personagem do gênero masculino? ${generoMasculino2}
// Outras Identidades: ${outrasIdentidades2}

// ${nomePersonagem3.toUpperCase()}
// Identidade: ${identidade3}
// Altura: ${altura3} m
// Personagem do gênero masculino? ${generoMasculino3}
// Outras Identidades: ${outrasIdentidades3}

// `)

//SEMANA 3

//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório. Chamamos este processo de reescrever um código já escrito, de refatoração.

// console.log(personagensMasculinos[0].outrasIdentidades.join())

// function personagensMasculinosString ()

// const personagensMasculinosString = (personagensMasculinos) => {
//     const array =[]
//     for(let personagem of personagensMasculinos){
//             array.push([personagem], personagem.outrasIdentidades = personagem.outrasIdentidades.join())
//         }
//     return array
// }

const personagensMasculinosString = (personagensMasculinos) => {
    for(let personagem of personagensMasculinos){
            personagem.outrasIdentidades = personagem.outrasIdentidades.join()
        }
    return personagensMasculinos
}


console.log(personagensMasculinosString(personagensMasculinos))

// const personagensOutrasIdentidadesString = personagensMasculinos.map(personagensMasculinosString)



for(let personagem of personagensMasculinos){
    console.log(personagem.outrasIdentidades)
    // for(const identidades of personagem.outrasIdentidades){
    //     console.log(identidades)
    // }
}

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

const personagem4 = {
    nome: "Miles Gonzalo Morales",
    identidade: "Spider-Man",
    altura: 1.73,
    generoMasculino: true,
    outrasIdentidades: `"Garoto-Aranha" ,"Homem-Aranha Ultimate", "Aranha das Sombras"`,
    foto: "imagem"
}

personagensMasculinos.push(personagem4)

console.log(personagensMasculinos)

const imprimePropriedades = (personagensMasculinos) => {
    for(personagem of personagensMasculinos) {
        for(propriedade in personagem)
        console.log(`${propriedade}: ${personagem[propriedade]}`)
    } 
}

imprimePropriedades(personagensMasculinos)

//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

// function objetoEmString (personagensMasculinos) {
//     let stringJuntas = []
//     for(personagem of personagensMasculinos) {
//         stringJuntas = [personagem.nome, personagem.identidade, personagem.altura, personagem.generoMasculino, personagem.outrasIdentidades]
// }   console.log(stringJuntas)
// }
// const objetoEmString = (personagensMasculinos) => {
//     for(personagem of personagensMasculinos) {
//         const stringJuntas = [personagem.nome, personagem.identidade, personagem.altura, personagem.generoMasculino, personagem.outrasIdentidades]
// }   console.log(stringJuntas)
// }

// objetoEmString(personagensMasculinos)

//const stringJuntas = [personagensMasculinos[personagem].nome, personagensMasculinos[personagem].identidade, personagensMasculinos[personagem].altura, personagensMasculinos[personagem].generoMasculino, personagensMasculinos[personagem].outrasIdentidades]

const objetoEmString = (personagensMasculinos) => {
    let stringJuntas = []
    for(personagem of personagensMasculinos) {
        for(propriedade in personagem)
        stringJuntas.push(personagem[propriedade])
    } 
    const newString = stringJuntas.join()
    console.log(newString)
}

objetoEmString(personagensMasculinos)

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

personagens.push(personagem1, personagem2, personagem3, personagem4)

console.log(personagens)

const retornaBlack = personagens.filter((possuiBlackNoNome) => {
    return possuiBlackNoNome.identidade === "Black Widow"
})

console.log(retornaBlack)

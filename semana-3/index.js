const personagem1 = {
    nome: "Dr. Charles Francis Xavier",
    identidade: "Professor X",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: ["\"X\"", "\"Prisioneiro M-13\"", "\"Acushla\""]
}

const personagem2 = {
    nome: "Natalia Alianovna \"Natasha\" Romanoff",
    identidade: "Black Widow",
    altura: 1.65,
    generoMasculino: false,
    outrasIdentidades: ["\"Natalie Rushman\"", "\"Tatiana Sokova\"", "\"Melina Vostokoff\""]
}

const personagem3 = {
    nome: "T'Challa",
    identidade: "Black Panther",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: ["\"Tigre de carvão\"", "\"Haramu-Sarki\"", "\"Gato do Bairro\""]
}

const personagens = []

personagens.push(personagem1, personagem2, personagem3)

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

// const personagensMasculinosString = (personagensMasculinos) => {
//     for(let personagem of personagensMasculinos){
//             personagem.outrasIdentidades = personagem.outrasIdentidades.join()
//         }
//     return personagensMasculinos
// }

// console.log(personagensMasculinosString(personagensMasculinos))

const personagensMasculinosStringMap = personagens.map((characters) => {
    return {...characters, outrasIdentidades: outrasIdentidades.join()}
})

console.log(personagensMasculinosStringMap)

// const personagensOutrasIdentidadesString = personagensMasculinos.map(personagensMasculinosString)

// for(let personagem of personagensMasculinos){
//     console.log(personagem.outrasIdentidades)
//     // for(const identidades of personagem.outrasIdentidades){
//     //     console.log(identidades)
//     // }
// }

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

const personagem4 = {
    nome: "Miles Gonzalo Morales",
    identidade: "Spider-Man",
    altura: 1.73,
    generoMasculino: true,
    outrasIdentidades: `"Garoto-Aranha" ,"Homem-Aranha Ultimate", "Aranha das Sombras"`
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

personagens.push(personagem4)

console.log(personagens)

const personagemUsuario = prompt(`Digite o seu personagem`)

const retornaBlack = personagens.filter((possuiBlackNoNome) => {
    if(possuiBlackNoNome.identidade === personagemUsuario) {
        console.log(possuiBlackNoNome.identidade)
    } else {
        alert("nenhum item foi encontrado.")
    }
    return possuiBlackNoNome.identidade === "Black Widow"
})

// console.log(retornaBlack)

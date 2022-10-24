const personagem1 = {
    nome: "Dr. Charles Francis Xavier",
    fonte: "https://marvel.fandom.com/pt-br/wiki/Charles_Xavier_(Terra-616)",
    identidade: "Professor X",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: `"\"X\"", "\"Prisioneiro M-13\"", "\"Acushla\""`,
    foto: "./asset/Professor_X.jpg"
}

const personagem2 = {
    nome: "Natalia Alianovna \"Natasha\" Romanoff",
    fonte: "https://marvel.fandom.com/pt-br/wiki/Natalia_Romanova_(Terra-616)",
    identidade: "Black Widow",
    altura: 1.65,
    generoMasculino: false,
    outrasIdentidades: `"\"Natalie Rushman\"", "\"Tatiana Sokova\"", "\"Melina Vostokoff\""`,
    foto: "./asset/Black_Widow.jpg"
}

const personagem3 = {
    nome: "T'Challa",
    fonte: "https://marvel.fandom.com/pt-br/wiki/T%27Challa_(Terra-616)",
    identidade: "Black Panther",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: `"\"Tigre de carvão\"", "\"Haramu-Sarki\"", "\"Gato do Bairro\""`,
    foto: "./asset/Black_Panther.jpg"
}

const personagem4 = {
    nome: "Miles Gonzalo Morales",
    fonte: "https://marvel.fandom.com/pt-br/wiki/Miles_Morales_(Terra-1610)",
    identidade: "Spider-Man",
    altura: 1.73,
    generoMasculino: "Masculino",
    outrasIdentidades: `"Garoto-Aranha" ,"Homem-Aranha Ultimate", "Aranha das Sombras"`,
    foto: "./asset/Miles_Morales_Spider-Man.jpg"
}

const personagens = []

personagens.push(personagem1, personagem2, personagem3, personagem4)

console.log(personagens)


// function adicionaPersonagem () {
//     const divImagemPersonagem = document.createElement("img");
//     divImagemPersonagem.setAttribute("src", personagens[index].foto);
//     const divReferenciaCard = document.getElementById("box1");
//     divReferenciaCard.insertAdjacentElement("afterbegin", divImagemPersonagem);
//     const listaNaoOrdenadaAtributos = document.createElement("ul");
//     listaNaoOrdenadaAtributos.setAttribute("class", "alinhar-acima");
//     divReferenciaCard.insertAdjacentElement("beforeend", listaNaoOrdenadaAtributos);
//     const nomePersonagem = document.createElement("li");
//     const identidadePersonagem = document.createElement("li");
//     const alturaPersonagem = document.createElement("li");
//     const generoPersonagem = document.createElement("li");
//     const outrasIdentidadesPersonagem = document.createElement("li");

// }

// personagens.forEach(adicionaPersonagem);

// divReferenciaLista.insertAdjacentElement("beforeend", listaNaoOrdenadaAtributos);

// const divReferenciaLista = document.querySelectorAll("alinhar-acima");
// console.log(divReferenciaLista)
// const nomePersonagem = document.createElement("li");
// const identidadePersonagem = document.createElement("li");
// const alturaPersonagem = document.createElement("li");
// const generoPersonagem = document.createElement("li");
// const outrasIdentidadesPersonagem = document.createElement("li");


personagens.forEach(adicionaPersonagem)

function adicionaPersonagem (cadaPersonagem, index, arr) {
    console.log(cadaPersonagem)
    
    let divReferenciaLista = document.getElementById("box1");
    console.log(divReferenciaLista);
    let listaNaoOrdenadaAtributos = document.createElement("ul");
    let nomePersonagem = document.createElement("li");
    let conteudoNomePersonagem = document.createTextNode(`${cadaPersonagem.nome}`);
    listaNaoOrdenadaAtributos.insertAdjacentElement('afterend', nomePersonagem);
    console.log(listaNaoOrdenadaAtributos);
    console.log(conteudoNomePersonagem.textContent);
    nomePersonagem.appendChild(conteudoNomePersonagem);
    console.log(nomePersonagem);
    // divReferenciaLista.insertAdjacentElement('afterend', nomePersonagem);
    console.log(divReferenciaLista);
    
}


// let identidadePersonagem = document.createElement("li");
// let alturaPersonagem = document.createElement("li");
// let generoPersonagem = document.createElement("li");
// let outrasIdentidadesPersonagem = document.createElement("li");
const personagem1 = {
    nome: "Dr. Charles Francis Xavier",
    fonte: "https://marvel.fandom.com/pt-br/wiki/Charles_Xavier_(Terra-616)",
    identidade: "Professor X",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: `"X", "Prisioneiro M-13", "Acushla"`,
    foto: "./asset/Professor_X.jpg"
}

const personagem2 = {
    nome: "Natalia Alianovna Natasha Romanoff",
    fonte: "https://marvel.fandom.com/pt-br/wiki/Natalia_Romanova_(Terra-616)",
    identidade: "Black Widow",
    altura: 1.65,
    generoMasculino: false,
    outrasIdentidades: `"Natalie Rushman", "Tatiana Sokova", "Melina Vostokoff"`,
    foto: "./asset/Black_Widow.jpg"
}

const personagem3 = {
    nome: "T'Challa",
    fonte: "https://marvel.fandom.com/pt-br/wiki/T%27Challa_(Terra-616)",
    identidade: "Black Panther",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: `"Tigre de carvão", "Haramu-Sarki", "Gato do Bairro"`,
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

personagens.forEach(adicionaPersonagem)

function adicionaPersonagem (cadaPersonagem, index, arr) {
    console.log(cadaPersonagem)
    
    //Criando referência para lista não ordenada
    let divReferenciaLista = document.getElementById(`box${index+1}`);
    console.log(divReferenciaLista);
    let listaNaoOrdenadaAtributos = document.createElement("ul");
    //Criando items da lista
    let nomePersonagem = document.createElement("li");
    let identidadePersonagem = document.createElement("li");
    let alturaPersonagem = document.createElement("li");
    let outrasIdentidadesPersonagem = document.createElement("li");
    //Criando texto dos cards
    let conteudoNomePersonagem = document.createTextNode(`Nome:  ${cadaPersonagem.nome}`);
    let conteudoIdentidadePersonagem = document.createTextNode(`Identidade: ${cadaPersonagem.identidade}`);
    let conteudoAlturaPersonagem = document.createTextNode(`Altura: ${cadaPersonagem.altura}`);
    let conteudoOutrasIdentidadesPersonagem = document.createTextNode(`Outras Identidades: ${cadaPersonagem.outrasIdentidades}`);
    //Adicionando conteúdos às tags
    nomePersonagem.appendChild(conteudoNomePersonagem);
    identidadePersonagem.appendChild(conteudoIdentidadePersonagem);
    alturaPersonagem.appendChild(conteudoAlturaPersonagem);
    outrasIdentidadesPersonagem.appendChild(conteudoOutrasIdentidadesPersonagem);
        
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', identidadePersonagem);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', alturaPersonagem);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', outrasIdentidadesPersonagem);
    listaNaoOrdenadaAtributos.insertAdjacentElement('afterbegin', nomePersonagem);
    
    console.log(conteudoNomePersonagem.textContent);

    console.log(listaNaoOrdenadaAtributos);
    console.log(nomePersonagem);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', nomePersonagem);
    console.log(listaNaoOrdenadaAtributos);
    divReferenciaLista.insertAdjacentElement('beforeend',listaNaoOrdenadaAtributos)
}



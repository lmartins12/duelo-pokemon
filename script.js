let pokemon1 = {
    nome: "Mudkip",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
    atributos: {
        ataque: 50,
        defesa: 60,
        especial: 40
    }
};

let pokemon2 = {
    nome: "charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    atributos: {
        ataque: 60,
        defesa: 30,
        especial: 60
    }
};

let pokemon3 = {
    nome: "chespin",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png",
    atributos: {
        ataque: 40,
        defesa: 60,
        especial: 50
    }
};

let pokemon4 = {
    nome: "pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos: {
        ataque: 60,
        defesa: 30,
        especial: 60
    }
};

let pokemon5 = {
    nome: "eevee",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    atributos: {
        ataque: 50,
        defesa: 50,
        especial: 50
    }
};

let pokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];
let pokemonBot;
let pokemonJogador;

function sortearPokemon() {
    let numeroPokemonBot = parseInt(Math.random() * 5);
    pokemonBot = pokemons[numeroPokemonBot];
    console.log(pokemonBot);

    let numeroPokemonJogador = parseInt(Math.random() * 5);
    while (numeroPokemonBot == numeroPokemonJogador) {
        numeroPokemonJogador = parseInt(Math.random() * 5)
    }
    pokemonJogador = pokemons[numeroPokemonJogador];
    console.log(pokemonJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
    exibirPokemonJogador();
}
function exibirOpcoes() {
    let opcoes = document.getElementById("opcoes");
    let opcoesTexto = ""

    for (let atributos in pokemonJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributos + "'>" + atributos;
    }
    
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    for (let i = 0; 1 < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById("resultado");
    let valorPokemonJogador = pokemonJogador.atributos[atributoSelecionado];
    let valorPokemonBot = pokemonBot.atributos[atributoSelecionado];

    if (valorPokemonJogador > valorPokemonBot) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>"
    } else if (valorPokemonBot > valorPokemonJogador) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu, tente novamente.</p>"
    } else {
        elementoResultado.innerHTML = "<p class='resultado-final'>Empatou!</p>"
    }

    document.getElementById('btnJogar').disabled = true

    exibirPokemonBot()

}

function exibirPokemonJogador() {
    let divPokemonJogador = document.getElementById("carta-jogador");
    divPokemonJogador.style.backgroundImage= `url(${pokemonJogador.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = ""
    for (let atributos in pokemonJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributos + "'>" + atributos + " " +
    pokemonJogador.atributos[atributos] + "<br>";
    }
    let nomeP = `<p class= "carta-subtitle">${pokemonJogador.nome}</p>`

    divPokemonJogador.innerHTML = moldura + nomeP + tagHTML + opcoesTexto + "</div>"
}

function exibirPokemonBot() {
    let divPokemonBot= document.getElementById("carta-maquina");
    divPokemonBot.style.backgroundImage= `url(${pokemonBot.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = ""
    for (let atributos in pokemonBot.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributos + "'>" + atributos + " " +
    pokemonBot.atributos[atributos] + "</p>";
    }
    let nomeP = `<p class= "carta-subtitle">${pokemonBot.nome}</p>`

    divPokemonBot.innerHTML = moldura + nomeP + tagHTML + opcoesTexto + "</div>"
}
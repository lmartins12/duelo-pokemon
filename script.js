let pokemons = [
    {
      nome: "Mudkip",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
      atributos: {
          Ataque: 150,
          Defesa: 150,
          Especial: 150
      }
    },
    {
      nome: "chespin",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png",
      atributos: {
          Ataque: 40,
          Defesa: 60,
          Especial: 50
      }
    },
    {   
      nome: "Bulbasaur",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      atributos: {
        Ataque: 49,
        Defesa: 49,
        Especial: 65,
     }
    },
    {   
      nome: "Ivysaur",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      atributos: {
        Ataque: 62,
        Defesa: 63,
        Especial: 80,
     }
    },
    {   
      nome: "Venusaur",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      atributos: {
        Ataque: 82,
        Defesa: 83,
        Especial: 100,
     }
    },
    {   
      nome: "Charmander",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      atributos: {
        Ataque: 52,
        Defesa: 43,
        Especial: 60,
     }
    },
    {   
      nome: "Charmeleon",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      atributos: {
        Ataque: 64,
        Defesa: 58,
        Especial: 80,
     }
    },
    {   
      nome: "Charizard",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      atributos: {
        Ataque: 84,
        Defesa: 78,
        Especial: 109,
      }
    },
    {   
      nome: "Squirtle",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      atributos: {
        Ataque: 48,
        Defesa: 65,
        Especial: 50,
     }
    },
    {   
      nome: "Wartortle",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      atributos: {
        Ataque: 63,
        Defesa: 80,
        Especial: 65,
     }
    },
    {   
      nome: "Blastoise",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      atributos: {
        Ataque: 83,
        Defesa: 100,
        Especial: 85,
     }
    },
    {    
      nome: "Pidgeot",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
      atributos: {
        Ataque: 80,
        Defesa: 75,
        Especial: 70,
      }
    },
    {    
      nome: "Pikachu",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1.png",    
      atributos: {
        Ataque: 55,
        Defesa: 40,
        Especial: 50,
     }
    },
    {    
      nome: "Raichu",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",    
      atributos: {
        Ataque: 90,
        Defesa: 55,
        Especial: 90,
      }
    },
    {    
      nome: "Ninetales",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",    
      atributos: {
        Ataque: 76,
        Defesa: 75,
        Especial: 81,
      }
    },
    {    
      nome: "Meowth",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      atributos: {
        Ataque: 45,
        Defesa: 35,
        Especial: 40,
     }
    },
    {    
      nome: "Psyduck",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
      atributos: {
        Ataque: 52,
        Defesa: 48,
        Especial: 65,
     }
    },
    {    
      nome: "Alakazam",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",    
      atributos: {
        Ataque: 50,
        Defesa: 45,
        Especial: 135,
      }
    },
    {    
      nome: "Machamp",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",    
      atributos: {
        Ataque: 130,
        Defesa: 80,
        Especial: 65,
     }
    },
    {    
      nome: "Golem",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
      atributos: {
        Ataque: 120,
        Defesa: 130,
        Especial: 55,
     }
    },
    {    
      nome: "Rapidash",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",    
      atributos: {
        Ataque: 100,
        Defesa: 70,
        Especial: 80,
      }
    },
    {    
      nome: "Magneton",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
      atributos: {
        Ataque: 60,
        Defesa: 95,
        Especial: 120,
     }
    },
    {
      nome: "Hitmonlee",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
      atributos: {
        Ataque: 120,
        Defesa: 53,
        Especial: 35,
     }
    },
    {
      nome: "Hitmonchan",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
      atributos: {
        Ataque: 105,
        Defesa: 79,
        Especial: 35,
     }
    },
    {
      nome: "Scyther",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
      atributos: {
        Ataque: 110,
        Defesa: 80,
        Especial: 55,
      }
    },
    {
      nome: "Magikarp",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",    
      atributos: {
        Ataque: 10,
        Defesa: 55,
        Especial: 15,
     }
    },
    {
      nome: "Gyarados",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
      atributos: {
        Ataque: 125,
        Defesa: 79,
        Especial: 60,
     }
    },
    {
      nome: "Lapras",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
      atributos: {
        Ataque: 85,
        Defesa: 80,
        Especial: 85,
     }
    },
    {
      nome: "Ditto",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      atributos: {
        Ataque: 48,
        Defesa: 48,
        Especial: 48,
     }
    },
    {
      nome: "Eevee",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",    
      atributos: {
        Ataque: 55,
        Defesa: 50,
        Especial: 45,
     }
    },
    {
      nome: "Vaporeon",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
      atributos: {
        Ataque: 65,
        Defesa: 60,
        Especial: 110,
     }
    },
    {
      nome: "Jolteon",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
      atributos: {
        Ataque: 65,
        Defesa: 60,
        Especial: 110,
      }
    },
    {
      nome: "Flareon",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",    
      atributos: {
        Ataque: 130,
        Defesa: 60,
        Especial: 95,
     }
    },
    {
      nome: "Aerodactyl",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
      atributos: {
        Ataque: 105,
        Defesa: 65,
        Especial: 60,
      }
    },
    {
      nome: "Snorlax",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      atributos: {
        Ataque: 110,
        Defesa: 65,
        Especial: 65,
     }
    },
    {
      nome: "Articuno",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
      atributos: {
        Ataque: 85,
        Defesa: 100,
        Especial: 95,
     }
    },
    {
      nome: "Zapdos",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
      atributos: {
        Ataque: 90,
        Defesa: 85,
        Especial: 125,
      }
    },
    {
      nome: "Moltres",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
      atributos: {
        Ataque: 100,
        Defesa: 90,
        Especial: 125,
     }
    },
    {
      nome: "Dragonite",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      atributos: {
        Ataque: 134,
        Defesa: 95,
        Especial: 100,
     }
    },
    {
      nome: "Mewtwo",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      atributos: {
        Ataque: 110,
        Defesa: 90,
        Especial: 154,
      }
    },
    {
      nome: "Mew",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",    
      atributos: {
        Ataque: 100,
        Defesa: 100,
        Especial: 100,
      }
    }
  ];

let pokemonBot;
let pokemonJogador;

function sortearPokemon() {
    let numeroPokemonBot = parseInt(Math.random() * 41);
    pokemonBot = pokemons[numeroPokemonBot];
    console.log(pokemonBot)

    let numeroPokemonJogador = parseInt(Math.random() * 41);
    while (numeroPokemonBot == numeroPokemonJogador) {
        numeroPokemonJogador = parseInt(Math.random() * 41)
    }
    pokemonJogador = pokemons[numeroPokemonJogador];


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

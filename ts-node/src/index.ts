// import { getPokemon } from "./generics/get-pokemon";

// getPokemon(4)
//   .then((pokemon) => console.log(pokemon.sprites.front_default))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("fin promesa"));

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");
charmander.publicApi = "https://fernando-herrera.coM";
console.log(charmander);

// (<any>Pokemon.prototype).customName = "Pikachu";

// charmander.savePokemonToDB(320);

import PokemonCard from "./components/PokemonCard"; // Importe le composant PokemonCard
import { useState } from "react"; // Importe le hook useState de React

function App() {
  // Déclare un state pour suivre l'index du Pokémon actuel, initialisé à 0
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Liste de Pokémon avec leurs noms et images
  const pokemons = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
    // Ajoutez d'autres Pokémon si nécessaire
  ];

  return (
    <div>
      <h1>Pokémon</h1>
      <p>Pokémon actuel : {pokemons[pokemonIndex].name}</p>{" "}
      {/* Affiche le nom du Pokémon actuel */}
      {/* Bouton pour passer au Pokémon précédent */}
      <button
        onClick={() => {
          // Diminue l'index si ce n'est pas le premier Pokémon
          if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
          }
        }}
        disabled={pokemonIndex === 0} // Désactive le bouton si on est au premier Pokémon
      >
        Précédent
      </button>
      {/* Bouton pour passer au Pokémon suivant */}
      <button
        onClick={() => {
          // Augmente l'index si ce n'est pas le dernier Pokémon
          if (pokemonIndex < pokemons.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
          }
        }}
        disabled={pokemonIndex === pokemons.length - 1} // Désactive le bouton si on est au dernier Pokémon
      >
        Suivant
      </button>
      {/* Affiche la carte du Pokémon sélectionné en utilisant le composant PokemonCard */}
      <PokemonCard pokemon={pokemons[pokemonIndex]} />
    </div>
  );
}

export default App;

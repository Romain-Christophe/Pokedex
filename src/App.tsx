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
      <nav>
        {pokemons.map((pokemon, index) => (
          <button
            key={pokemon.name} // Utilise le nom du Pokémon comme clé unique
            onClick={() => setPokemonIndex(index)} // Met à jour l'index du Pokémon affiché
          >
            {pokemon.name}
          </button>
        ))}
      </nav>
      <p>Pokémon actuel : {pokemons[pokemonIndex].name}</p>{" "}
      {/* Affiche le nom du Pokémon actuel */}
      {/* Affiche la carte du Pokémon sélectionné en utilisant le composant PokemonCard */}
      <PokemonCard pokemon={pokemons[pokemonIndex]} />
    </div>
  );
}

export default App;

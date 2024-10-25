import PokemonCard from "./componants/PokemonCard"; 
import pokemonList from "./componants/pokemonList";


function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}  />
       
    </div>
  );
}

export default App;

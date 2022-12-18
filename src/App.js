import './App.css';
import ListaPokemon from './components/ListaPokemon';
import Pokemon from './components/Pokemon';
import Principal from './components/Principal';
import TiposPokemon from './components/TiposPokemon';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Principal>
          
          <TiposPokemon />
           <ListaPokemon />
           <Pokemon />
          
        </Principal>
      </header>
    </div>
  );
}

export default App;

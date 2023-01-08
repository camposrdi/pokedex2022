import './App.css';
import './components/Principal.css';
import ListaPokemon from './components/ListaPokemon';
import Principal from './components/Principal';
import TiposPokemon from './components/TiposPokemon';




function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Principal>
          
          <TiposPokemon />
           <ListaPokemon />
          
          
        </Principal>
      </header>
    </div>
  );
}

export default App;

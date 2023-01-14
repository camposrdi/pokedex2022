import { useState,useEffect } from 'react';
import './App.css';
import ListaPokemon from './components/ListaPokemon';
import Principal from './components/Principal';
import TiposPokemon from './components/TiposPokemon';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';

const tipoSeleccionado = "all";


function App() {
   const [tipo, setTipo] = useState(tipoSeleccionado);
   const {  isAuthenticated } = useAuth0();
  
  const cambiarTipo = (tipo1) => {
      setTipo(tipo1)
  } 

  return (
    <div className="App container">
      <header className="App-header">
        <Login /> 
      { isAuthenticated && ( <Principal>
          <TiposPokemon setTipoPokemon={cambiarTipo} />
          <ListaPokemon tipoPokemon={tipo} />
        </Principal> )
        }
      </header>
    </div>
  );
}

export default App;

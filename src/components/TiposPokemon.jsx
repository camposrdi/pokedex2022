import React, {useEffect, useState} from 'react'
import {tiposColorPokemon} from '../utils/constantes'
import Loading from './Loading'
import useFetch from '../hooks/useFetch'

function TiposPokemon({setTipoPokemon}) {
    const {isFetching, data, error} = useFetch("https://pokeapi.co/api/v2/type");

    const [tipos, SetTipos] = useState([])
    console.log(isFetching)

  useEffect(() => {
    if (!isFetching) {
      if (data != null) {
        SetTipos(data);
      }
    }
  }, [isFetching]);

   
  return (
  <>
  <Loading isLoading={isFetching}/>

    <h1 className="tipotitulo"> Pokemon's types </h1>

     <button className="tipopokemon" key={55} 
              onClick= {() => {setTipoPokemon("all")}}
              style={{backgroundColor: tiposColorPokemon.find((c) => c.tipo === "all").color}}>all</button>

    {
        tipos.map((s, i) => {
        const color = tiposColorPokemon.find((c) => c.tipo === s.name);
        return <button 
                  className="tipopokemon" 
                  key={i} onClick= {() => {setTipoPokemon(s.name)}} style={{backgroundColor: color.color}}>{s.name}
                  
                  </button>

        })
        }
        
        

    </>
    
  )
}

export default TiposPokemon
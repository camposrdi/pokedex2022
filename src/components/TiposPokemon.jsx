import React, {useEffect, useState} from 'react'
import {tiposColorPokemon} from '../utils/constantes'

function TiposPokemon({setTipoPokemon}) {
    
    const [tipos, SetTipos] = useState([])
    
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/type")
      .then(response => 
         response.json()
      )
      .then(respuesta =>{
        SetTipos(respuesta.results)
      })
      .catch(
        error =>{console.error(error)}
      )}, [])
    

  return (
  <>
  
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

        })}
        
        

    </>
    
  )
}

export default TiposPokemon
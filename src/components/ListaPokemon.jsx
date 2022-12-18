import React, {useState, useEffect } from 'react'

const urlBase="https://pokeapi.co/api/v2/pokemon/"

const initialState = {
    "count": 0,
    "next": "",
    "previous": "",
    "results": [
        {
            "name": "",
            "url": ""
        }]
      }

function ListaPokemon() {
const [url, SetUrl] = useState(urlBase + "?limit=3&offset=9")
    const [pokemon, SetPokemon] = useState(initialState)

    useEffect(() => {
    fetch(url)
      .then(response => 
         response.json()
      )
       .then(respuesta =>{
        SetPokemon(respuesta)
        console.log(respuesta)
      
      })
      .catch(
        error =>{console.error(error)}
      )}, [url])
    
  return (
    <>
    <div> Lista de Pokémon </div>
{console.log({pokemon})}
    {
    
       pokemon.results.map((s, i) => 
       {
        return <p> {s.name} </p>
        })
        }
        
     <button className='btn btn-primary' onClick={() => { SetUrl(pokemon.previous)}}>Prev</button>
    <button className='btn btn-secondary' onClick={() => {SetUrl(pokemon.next)}}>Next</button> 
    </>
  )
}

export default ListaPokemon
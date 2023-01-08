import React, {useState, useEffect } from 'react'
import Pokemon from './Pokemon'

const urlBase="https://pokeapi.co/api/v2/pokemon/"
const urlImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

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
const [url, SetUrl] = useState(urlBase + "?limit=28&offset=9")
    const [pokemon, SetPokemon] = useState(initialState)
    const [namePokemon, setNamePokemon] = useState("")

    useEffect(() => {
    fetch(url)
      .then(response => 
         response.json()
      )
       .then(respuesta =>{
        let listaPokemon=respuesta.results.map((p) =>
        {
          let url = urlImg + p.url.replace(urlBase,"").replace("/","")+".png"
          return {...p, urlImage:url}
        })
        respuesta.results=listaPokemon
        SetPokemon(respuesta)
      
      
      })
      .catch(
        error =>{console.error(error)}
      )}, [url])
    
  return (
    <>
  
  
    <div className="listapokemon"> Pokemon's list </div>


    {
    
       pokemon.results.map((s, i) => 
       {
        return   <div className= "lista" onClick={() => {setNamePokemon(s.name)}} key={i}>
                      <img src={s.urlImage} alt={s.name}></img>
                       <p> {s.name} </p>
                   </div>

               
        })}
        
        <br></br>
    <button className='btn btn-primary' onClick={() => { SetUrl(pokemon.previous)}}>Prev</button>
    <button className='btn btn-secondary' onClick={() => {SetUrl(pokemon.next)}}>Next</button> 
     <Pokemon name={namePokemon}/> 
     


    </>
  )
}

export default ListaPokemon
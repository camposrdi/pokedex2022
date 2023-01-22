import React from 'react'
import Pokemon from './Pokemon'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const url = "https://pokeapi.co/api/v2/pokemon/"

function FindPokemon({name}) {
  return (
     MySwal.fire({showClass: {
                      popup: 'animate__animated animate__fadeInRight'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  ,html:<div className="container">
                  <Pokemon urlPokemon={url+name}>

                  </Pokemon>
                  </div>},
              )
  )
}

export default FindPokemon
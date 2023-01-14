import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Modal from "./Modal";
import useModal from "../hooks/useModal.js";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const urlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const paginado = "?limit=28&offset=9";
const urlTipos = "https://pokeapi.co/api/v2/type/";

const initialState = {
  count: 0,
  next: "",
  previous: "",
  results: [
    {
      name: "",
      url: "",
    },
  ],
};

function ListaPokemon({ tipoPokemon }) {
    const [isOpenModal, openModal ,closeModal ] = useModal(true);
    const [url, SetUrl] = useState('');
   
useEffect(()=>{
  const urlFinal =
    tipoPokemon == "all" ? urlBase + paginado : urlTipos + tipoPokemon;
    SetUrl(urlFinal)
},[tipoPokemon])
  

  const [pokemon, SetPokemon] = useState(initialState);
  
  const [urlPokemon, seturlPokemon] = useState("");

  useEffect(() => {
    // SetUrl(urlFinal);
        fetch(url)
      .then((response) => response.json())
      .then((respuesta) => {
        let dataPokemon = null;
        let listaPokemon = null;
        if (tipoPokemon === undefined || tipoPokemon === "all") {
          dataPokemon = respuesta.results;
          listaPokemon = dataPokemon.map((p) => {
            let url =
              urlImg + p.url.replace(urlBase, "").replace("/", "") + ".png";
            return { ...p, urlImage: url };
          });
        } else {
          dataPokemon = respuesta.pokemon;
          listaPokemon = dataPokemon.map((p) => {
            let url =
              urlImg +
              p.pokemon.url.replace(urlBase, "").replace("/", "") +
              ".png";
            return { ...p.pokemon, urlImage: url };
          });
        }
        respuesta.results = listaPokemon;
        SetPokemon(respuesta);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <>
      <div className="listapokemon"> Pokemon's list </div>

      {pokemon.results.map((s, i) => {
        return (
          <div
            className="lista"
            onClick={() => {
              seturlPokemon();

              MySwal.fire({showClass: {
                      popup: 'animate__animated animate__fadeInRight'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  ,html:<div className="container-pokeinfo">
                  <Pokemon urlPokemon={s.url}>

                  </Pokemon>
                  </div>},
              )
            
            }}
            key={i}
          >
            <img className="pokelist" src={s.urlImage} alt={s.name}></img>
            <p> {s.name} </p>
          </div>
        );
      })}

      <br></br>
      <button
        className="btn btn-primary"
        onClick={() => {
          SetUrl(pokemon.previous);
        }}
      >
        Prev
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          SetUrl(pokemon.next);
        }}
      >
        Next
      </button>
     
    </>
  );
}

export default ListaPokemon;

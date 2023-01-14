import React, {useState} from 'react'
import Logout from './Logout';
import Profile from './Profile';
import './Principal.css';
import Pokemon from './Pokemon';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const url = "https://pokeapi.co/api/v2/pokemon/"

//import SearchBar from './SearchBar'



function Principal(props) {
    let {children} = props;
    const [name, setName] = useState('')

  return (
    <>
   

   
<nav className="navbar navbar-inverse">
   <h1 className="tituloprincipal"> Pokédex </h1>   
   <img/>
  <div className="container-fluid">
    <div className="navbar-header">
     {/* <SearchBar url={url}>

     </SearchBar> */}
    </div>
  
    <form className="navbar-form navbar">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter name or id" name="search" onChange={(e)=>{
          setName(e.target.value)
        }} />
      </div>
      
      <button type="button" className="btn btn-default" name="searchbt" onClick={()=>{
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
      }}>Search</button>
    </form>
    
     <ul className="nav navbar-nav navbar-right">
       <Profile />
      <Logout />
    </ul>
  </div>
</nav>

    {children}

    
    </>
  )
}

export default Principal
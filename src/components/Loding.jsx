import React, { useEffect } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import '../components/Loading.css'
import loading from '../img/Pokeball.png'

const MySwal = withReactContent(Swal)

export default function Loding() { 
  useEffect(() => {
    loader()
  
   
  }, [])
  
  const loader = () => {
    MySwal.fire({
      title: "Loading...",
      html: <img className="loading" src={loading}></img> ,
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
      },
      willClose: () => {
        console.log("loading abierto");
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === MySwal.DismissReason.timer) {
        console.log("Loading cerrado");
      }
    });
  }
  return (
    
    <div className='loader'>
      <button onClick={() =>{ MySwal.close()}}>Aqui estoy</button>
      
    </div>
  )
}

import React, { useEffect } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import '../components/Loading.css'
import loading from '../img/Pokeball.png'

const MySwal = withReactContent(Swal)

export default function Loading({isLoading}) { 
  useEffect(() => {
    if (isLoading) {
      loader();
    } else {
      MySwal.close();
    }
  }, [isLoading])
  
  const loader = () => {
    MySwal.fire({
      title: "Loading...",
      html: <img className="loading" src={loading}></img> ,
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
      },
      willClose: () => {
        console.log("loading cerrado");
      },
    }).then((result) => {
     
    });
  }
  return (
    
    <div className='loader'>
     
      
    </div>
  )
}

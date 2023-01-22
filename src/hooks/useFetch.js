import { useState, useEffect } from 'react'

function useFetch(url) {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log(url)
    setIsFetching(true)
    fetch(url)
      .then((response) => response.json())
      .then((respuesta) => {
        console.log('AQUI', respuesta.results)
        setData(respuesta.results)
        setIsFetching(false)
      })
      .catch((error) => {
        setError(error)
        setIsFetching(false)
        console.error('ERROR',error);
      });
  
   
  }, [url])
  
    return{
        isFetching,
        data,
        error,
    }
}

export default useFetch
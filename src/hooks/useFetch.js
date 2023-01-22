import { useState, useEffect } from 'React'

function useFetch(url) {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsFetching(true)
    fetch(url)
      .then((response) => response.json())
      .then((respuesta) => {
        setData(respuesta.results)
        setIsFetching(false)
      })
      .catch((error) => {
        setError(error)
        setIsFetching(false)
        console.error(error);
      });
  
   
  }, [url])
  
    return{
        isFetching,
        data,
        error,
    }
}

export default useFetch
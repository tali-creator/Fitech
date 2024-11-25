import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
  
      fetch(url)
      .then(res => {
          if(!res.ok){
            throw Error("cant Fetch Data")
          }
       return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((err => {
        setIsPending(false)
        setError(err)}))
  
    }, [url])

    return {data, isPending, error}
}
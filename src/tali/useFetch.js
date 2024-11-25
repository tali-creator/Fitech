import { useEffect, useState } from "react";

//creating a custom hook function to fetch url
export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // logging url
    console.log("useEffect triggered with URL:", url);

    // incase of invalid url abort the fetch
    if (!url) return; 
    const abortController = new AbortController();
    setIsPending(true);

    // fetching the data and also catching errors
    //loading message
    // handling error incase of emergency abort
    fetch(url,  { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("cant Fetch Data")
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
//retuening abort controller
    return () => abortController.abort();

  }, [url])

//returning data , isPending and error so the can be used on other component
  return { data, isPending, error }
}
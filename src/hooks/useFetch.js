import { useState, useEffect } from "react";

export const useFetch = (url, method) => {
  //console.log(url,"idht hai")
  //console.log(url,"fetch function mein")
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);
  const postData = (postdata) => {
    // this is how we make post request
    //console.log(postdata);
    setOptions({
      method: "POST",
      // mode:'no-cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postdata),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchoptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, {
          ...fetchoptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { data, isPending, error, postData };
};

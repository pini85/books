import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, settings) => {
  console.log({ settings });
  const { shouldFetch = true, retries = 3 } = settings;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!shouldFetch) return;

    setLoading(true);
    setError(null);

    const source = axios.CancelToken.source();

    const fetchApi = async () => {
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        setData(response.data);
        setAttempt(0);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError("An unknown error occurred");
          if (attempt < retries) {
            setAttempt(attempt + 1);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    if (attempt < retries) {
      fetchApi();
    }

    return () => {
      source.cancel("Component unmounted");
    };
  }, [url, shouldFetch, attempt, retries]);

  return { data, loading, error };
};

export default useFetch;

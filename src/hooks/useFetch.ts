import { useEffect, useState } from "react";

const useFetch = (link, settings) => {
  const [error, setError] = useState<string | Error | null>(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchFn = async () => {
      const signal = controller.signal;
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(link, { ...settings, signal });

        if (!res.ok) {
          setError(`Req was not ok: ${res.status}`);
          return;
        }

        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (err) {
        if (err.name === "AbortError") {
          setError("Fetch aborted");
        } else {
          setError(err.message || "Fetched failed");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFn();

    return () => controller.abort();
  }, [link]);

  return { error, data, isLoading };
};

export default useFetch;

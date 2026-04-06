import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_TOKEN;
const LINK = import.meta.env.VITE_LINK;

const useFetchData = (link, ...importSettings) => {
  const [error, setError] = useState<string | Error | null>(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchFn = async () => {
      const signal = controller.signal;
      setIsLoading(true);

      try {
        const res = await fetch(link, { ...importSettings, signal });

        if (!res.ok) {
          setError("Req was not ok");
        }

        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (err) {
        if (err.name === "AbortError") {
          setError("Fetch aborted");
        } else {
          setError("Fetched failed: ", err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFn();

    return () => controller.abort();
  }, [link]);

  return [error, data, isLoading];
};

const SearchBar = () => {
  return <h1>here we search</h1>;
};

function App() {
  const [data, error, isLoading] = useFetchData(LINK, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;

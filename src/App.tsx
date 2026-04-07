import "./App.css";
import useFetch from "./hooks/useFetch";
import useQuery from "./hooks/useQuery";
import SearchBar from "./components/searchbar";

const API_KEY = import.meta.env.VITE_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_TOKEN;
const LINK = import.meta.env.VITE_LINK;

const FETCH_SETTINGS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

function App() {
  const {
    link,
    setSearchType,
    setQueryType,
    setLanguage,
    setPage,
    setSearch,
    setAdult,
  } = useQuery(LINK);

  const fetchLink = LINK + link;

  const { data, error, isLoading } = useFetch(fetchLink, FETCH_SETTINGS);

  console.log(data);

  return (
    <div>
      <SearchBar
        setters={{
          setSearchType,
          setQueryType,
          setLanguage,
          setPage,
          setSearch,
          setAdult,
        }}
      />
    </div>
  );
}

export default App;

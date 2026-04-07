import "./App.css";
import useFetch from "./hooks/useFetch";
import useQuery from "./hooks/useQuery";

// search/movie?query=batman&include_adult=false&language=en-US&page=1

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

const SearchBar = ({
  setters: {
    setSearchType,
    setQueryType,
    setLanguage,
    setPage,
    setSearch,
    setAdult,
  },
}) => {
  return <h1>here we search</h1>;
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

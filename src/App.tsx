import "./App.css";
import useFetch from "./hooks/useFetch";
import useQuery from "./hooks/useQuery";

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
    setSearchType, // /search, /discover, /find
    setQueryType, // movie/series
    setSearch, // What we are searching for. If empty, do not search
    setLanguage, // en-US etc.
    setPage, // start at 1
    setAdult, // Pornographic content (force to be false(disabled))
  },
}) => {
  return (
    <div className="h-[50vh] flex items-end justify-center">
      <div className="bg-olive-300 w-200 rounded-4xl">
        <form action="" className="w-full h-max flex flex-col">
          <input
            type="text"
            placeholder="Search..."
            className="bg-olive-100 w-full p-2 outline-0"
          />

          <div className="flex justify-between bg-olive-300 rounded-b-2xl overflow-hidden">
            <input
              value="Movie"
              type="button"
              name="movie"
              id="movie"
              className="w-full h-full cursor-pointer hover:bg-olive-100 py-4"
              style={{ transition: "background-color 0.15s ease-in-out" }}
            />

            <input
              value="Language"
              type="button"
              name="lang"
              id="lang"
              className="w-full h-full cursor-pointer hover:bg-olive-100 py-4"
              style={{ transition: "background-color 0.15s ease-in-out" }}
            />

            <input
              value="Page"
              type="button"
              name="page"
              id="page"
              className="w-full h-full cursor-pointer hover:bg-olive-100 py-4"
              style={{ transition: "background-color 0.15s ease-in-out" }}
            />

            <input
              value="Year"
              type="button"
              name="year"
              id="year"
              className="w-full h-full cursor-pointer hover:bg-olive-100 py-4"
              style={{ transition: "background-color 0.15s ease-in-out" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
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

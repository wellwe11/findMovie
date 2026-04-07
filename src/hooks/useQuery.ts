import { useState } from "react";

const useQuery = () => {
  const [searchType, setSearchType] = useState("search");
  const [queryType, setQueryType] = useState("movie");
  const [language, setLanguage] = useState("en-US");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [adult, setAdult] = useState(false);

  const pageString = `page=${page}`;

  const queryString = `query=${search}`;

  const link = `/${searchType}/${queryType}?${queryString}&include_adult=${adult}&language=${language}&${pageString}`;

  return {
    link,

    setSearchType,
    setQueryType,
    setLanguage,
    setPage,
    setSearch,
    setAdult,
  };
};

export default useQuery;

import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstSearch = useRef(true);
  
  const updateSearch = (value) => setSearch(value);
  
  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = false;
      return;
    }

    if (search === "") {
      setError("Esta vacio");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Solo hay numeros");
      return;
    }

    if (search.match(/^\w{0,2}$/)) {
      setError("Es menor a 3 elementos");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

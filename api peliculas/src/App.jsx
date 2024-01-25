import "tailwindcss/tailwind.css";
import "./App.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";
import { useCallback, useMemo } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const debounceChangeMovies = useCallback(
    debounce(({ search }) => {
      getMovies({ search });
    }, 500),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) return;
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue === " ") return;

    updateSearch(newValue);
    debounceChangeMovies({ search: newValue });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-start flex-col px-5 max-w-[800px] mx-auto box-border text-center">
      <Header
        error={error}
        search={search}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <main className="grid w-full grid-cols-auto-fit-200 place-items-center my-5">
        {loading ? <Loader /> : <Movies movies={movies} />}
      </main>
    </section>
  );
}

export default App;

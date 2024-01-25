import { useState, useRef, useCallback } from "react";

/**
 * Este es el customHook encargado de la logica de obtencion de peliculas
 * @param {object} param0
 * @param {string} param0.search Es un string con la busqueda
 * @returns {{movies: object[], getMovies: function({search: string}): void, loading: boolean}}
 */
export function useMovies({ search }) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (!search) return;
    if (previousSearch.current === search) return;

    try {
      setLoading(true);
      previousSearch.current = search;
      const URL = `https://www.omdbapi.com/?apikey=7746cf19&s=${search}`;
      const response = await fetch(URL);
      const jsonData = await response.json();
      const movies = jsonData?.Search;

      const mappedMovies = movies?.map((movie) => {
        return {
          id: movie?.imdbID,
          img:
            movie?.Poster === "N/A"
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/640px-Imagen_no_disponible.svg.png"
              : movie?.Poster,
          type: movie?.Type,
          year: movie?.Year,
          title: movie?.Title,
        };
      });

      setMovies(mappedMovies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, getMovies, loading };
}

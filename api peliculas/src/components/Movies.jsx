function ElementMovie({ title, image, year }) {
  return (
    <div className="w-52 h-auto text-center flex flex-col justify-center items-center my-5">
      <div className="w-full h-auto">
        <img src={image} alt={`Imagen de ${title}`} className="object-cover" />
      </div>

      <h2 className="font-semibold text-sm my-0">{title}</h2>

      <h3 className="text-sm my-0">{year}</h3>
    </div>
  );
}

function RenderMovies({ movies }) {
  return movies.map((movie, i) => {
    return (
      <ElementMovie
        title={movie?.title}
        image={movie?.img}
        year={movie?.year}
        key={i}
      />
    );
  });
}

function NoMovies() {
  return <h3>No hay peliculas disponibles</h3>;
}

export function Movies({ movies }) {
  if(movies === null) return <div/>
  
  const hasMovies = movies?.length > 0;

  return hasMovies ? <RenderMovies movies={movies} /> : <NoMovies />;
}

import React from "react";

const Header = ({error, search, handleSubmit, handleChange}) => {
  return (
    <header className="w-full text-center">
      <h1 className="text-2xl font-bold my-4">Buscador de peliculas</h1>

      {error && <p className="text-start text-red-500">{error}</p>}
      <form className="flex w-full gap-4 box-border" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Avengers, Mario..."
          name="searchMain"
          className="w-4/5 m-0"
          value={search}
          onChange={handleChange}
        />
        <button className="grow">Enviar</button>
      </form>
    </header>
  );
};

export default Header;

import React from "react";
import Filters from "./Filters";

const Header = () => {
  return (
    <section className="mb-12 flex w-full items-center justify-between h-24 p-2 box-borderf">
      <h1 className="text-2xl font-extrabold">React Shop 🛍️</h1>
      <Filters />
    </section>
  );
};
 
export default Header;

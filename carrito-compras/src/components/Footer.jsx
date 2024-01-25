import React from "react";
import useFilter from "../hooks/useFilter";
import useCart from "../hooks/useCart";

const Footer = () => {

  const {filters} = useFilter()
  const {cart} = useCart()

  const prop = [
    filters,
    ...cart,
  ]

  return (
    <footer className="fixed right-4 left-4 bottom-2 text-left bg-gray-900 px-2 py-2 rounded-md opacity-65 backdrop-blur-3xl shadow-md max-h-40 overflow-y-auto overflow-x-hidden">
      <span className="text-sm text-orange-400 opacity-80">Manejo de Frameworks</span>
      <h5 className="m-0 flex">Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
};

export default Footer
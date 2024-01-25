import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import useCart from "../hooks/useCart.js";

const Products = ({ products }) => {
  const { addToCart, checkProductInCart, removeFromCart } = useCart();

  return (
    <main className="w-full flex justify-center items-center">
      <ul className="grid grid-cols-auto-fit-200 gap-4 w-full">
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li
              key={product.id}
              className="flex flex-col gap-4 shadow-md rounded-sm bg-[#111] text-white p-4 justify-between"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-sm w-full aspect-video block object-cover bg-white"
              />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                  className={isProductInCart ? "bg-red-400" : "bg-green-400"}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;

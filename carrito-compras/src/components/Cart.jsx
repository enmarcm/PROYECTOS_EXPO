import React from "react";
import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css";
import useCart from "../hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className="border-b border-gray-700">
      <img
        className="aspect-video w-full "
        src={thumbnail}
        alt={`Image of ${title}`}
      />

      <div>
        <strong>{title}</strong> ${price}
      </div>

      <footer className="p-2">
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label
        htmlFor={cartCheckboxId}
        className="fixed items-center bg-blue-800 rounded-full cursor-pointer flex h-8 justify-center right-2 top-2 transition-all w-8 z-50 hover:scale-110 cart-button"
      >
        <CartIcon />
      </label>
      <input
        type="checkbox"
        name={cartCheckboxId}
        id={cartCheckboxId}
        hidden
        className="peer"
      />

      <aside className="bg-black hidden p-8  right-0 top-0 w-52 cart">
        <ul>
          {cart.map((itemCart) => {
            return (
              <CartItem
                price={itemCart?.price}
                quantity={itemCart?.quantity}
                thumbnail={itemCart?.thumbnail}
                key={itemCart?.title}
                title={itemCart?.title}
                addToCart={()=>addToCart(itemCart)}
              />
            );
          })}
        </ul>

        <button className="p-2" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;

import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const checkProductInCart = product =>{
    const {cart} = context
    const {id} = product
    const match = cart.some(item=>item.id === id)
    return match
  }

  return {...context, checkProductInCart};
}

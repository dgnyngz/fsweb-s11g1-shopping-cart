import React, { useContext } from "react";
import { ScCartCheckout } from "./scParts";
import { CartContext } from "../context/CartContext";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const sepet = useContext(CartContext);
  console.log(sepet.cart);
  const getCartTotal = () => {
    return sepet.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {sepet.cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;

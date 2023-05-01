import React from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navigation = () => {
  const sepet = useContext(CartContext);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{sepet.cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;

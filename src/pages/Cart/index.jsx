import { useState, useContext } from "react";
import { ShoppingContext } from "../../context/shoppingContext";
import { CartProduct } from "../../components/CartProduct";
import products from "../../jsons/products.json";
import RowProduct from "../../components/RowProduct";

const Cart = () => {
  return (
    <>
      <CartProduct/>
    </>
  );
};

export default Cart;

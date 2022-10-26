import { useState, useContext } from 'react';
import { ShoppingContext } from '../../context/shoppingContext';
import { CartProduct } from "../../components/CartProduct";
import products from '../../jsons/products.json'
import RowProduct from '../../components/RowProduct';

const Cart = () => {

  return (
    <>
       {
          products.map((product, index) => <CartProduct 

          precio={product.precio}
          ubicar={product.ubicar}
          titulo={product.titulo}
          descripcion={product.descripcion}
          id={product.id}
          key = {index} 
          data={product}
        />)
            
        } 
    </>
  );
};

export default Cart;

import React, { createContext } from "react";
import Cart from "../pages/Cart";
import { useState, useContext } from "react";
//PRUEBA PARA LEER
const producto = {
  precio: "500",
  ubicar: "Asus14.jfif",
  titulo: "Portatil Asus",
  descripcion: "Equipo de 14' con procesador Intel Core I3 10TH",
  id: 1,
};

const DataContext = React.createContext();

export const useCartContext = () => useContext(DataContext);
export const CartContext = ({children}) => {   

  const [cart, setCart] = useState([]);

  const addProduct = (producto, newQuantity) =>{
    const newCart = cart.filter(prod => prod.id !== producto.id)
    newCart.push({...producto, quantity : newQuantity});
    setCart(newCart);
    console.log(`Carrito: ${cart}`)
  }

  const clearCart = () =>{
    setCart([]); 
  }

  const isInCart = (id) =>{
    return cart.find(product => product.id === id) ? true : false;
     
  }

  const deleteProduct = (id) =>{
    return setCart([cart.filter(product => product.id !== id)])
  }


  return (
    <DataContext.Provider value={{
      clearCart,
      isInCart,
      deleteProduct,
      addProduct
    }}>
      {children}
    </DataContext.Provider> 
  )
}

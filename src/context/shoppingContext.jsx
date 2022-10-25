import React, { useState } from 'react'

export const ShoppingContext = React.createContext({});

export const ShoppingProvider = ({ children }) => {
    const [dataShopping, setDataShopping] = useState({
        precio: "500",
        ubicar: "Asus14.jfif",
        titulo: "Portatil Asus",
        descripcion: "Equipo de 14' con procesador Intel Core I3 10TH",
        id: 1,
    })


    const addProduct = (producto, newQuantity) => {
        const newCart = dataShopping.filter(prod => prod.id !== producto.id)
        newCart.push({ ...producto, quantity: newQuantity });
        setDataShopping(newCart);
    }

    const clearCart = () => {
        setDataShopping([]);
    }

    const isInCart = (id) => {
        return dataShopping.find(product => product.id === id) ? true : false;

    }

    const deleteProduct = (id) => {
        return setDataShopping([dataShopping.filter(product => product.id !== id)])
    }


    return (
        <ShoppingContext.Provider value={{ dataShopping, setDataShopping, clearCart, isInCart, deleteProduct, addProduct }}>
            {children}
        </ShoppingContext.Provider>
    )
}

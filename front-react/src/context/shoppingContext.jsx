import React, { useState } from 'react'

export const ShoppingContext = React.createContext();

export const ShoppingProvider = ({ children }) => {
    const [dataShopping, setDataShopping] = useState([])


    const isInCart = (id) => {

        return dataShopping.find(product => product.id === id) ? true : false;
    }


    const addProduct = (producto) => {

        console.log({ producto })
        //VALIDACION PARA AGREGAR AL CARRO SI YA EXISTE UN PRODUCTO
        if (isInCart(producto.id)) {
            const productoIndex = dataShopping.findIndex((valor) => valor.id == producto.id)
            dataShopping[productoIndex]['quantity'] = dataShopping[productoIndex].quantity + producto.quantity;
            setDataShopping(dataShopping);
            console.log(dataShopping)
        } else {
            setDataShopping(productData => [...productData, producto]);
        }


    }


    const clearCart = () => {
        setDataShopping([]);
    }


    const deleteProduct = (id) => {
        setDataShopping(dataShopping.filter(product => product.id !== id))
    }


    return (
        <ShoppingContext.Provider value={{ dataShopping, setDataShopping, clearCart, isInCart, deleteProduct, addProduct }}>
            {children}
        </ShoppingContext.Provider>
    )
}

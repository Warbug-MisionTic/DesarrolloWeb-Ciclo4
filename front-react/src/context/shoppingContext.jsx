import React, { useState } from 'react'

export const ShoppingContext = React.createContext();

export const ShoppingProvider = ({ children }) => {
    const [dataShopping, setDataShopping] = useState({
        fecha: new Date(),
        total: 0,
        totalProductos: 0,
        productos: []
    })

    const isInCart = (id) => {

        return dataShopping.productos.find(product => product.id === id) ? true : false;
    }


    const addProduct = (producto) => {

        //VALIDACION PARA AGREGAR AL CARRO SI YA EXISTE UN PRODUCTO
        if (isInCart(producto.id)) {
            const productoIndex = dataShopping.productos.findIndex((valor) => valor.id == producto.id)
            dataShopping.productos[productoIndex]['quantity'] = dataShopping.productos[productoIndex].quantity + producto.quantity;
            setDataShopping({ ...dataShopping, totalProductos: dataShopping.totalProductos + producto.quantity });
        } else {
            setDataShopping({ ...dataShopping, totalProductos: producto.quantity, productos: [...dataShopping.productos, producto] });
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

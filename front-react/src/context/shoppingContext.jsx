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
        console.log(producto)
        //VALIDACION PARA AGREGAR AL CARRO SI YA EXISTE UN PRODUCTO
        if (isInCart(producto.id)) {
            const productoIndex = dataShopping.productos.findIndex((valor) => valor.id == producto.id)
            dataShopping.productos[productoIndex]['quantity'] = dataShopping.productos[productoIndex].quantity + producto.quantity; //SUMA VALOR DE TOTAL PRODUCTOS
            setDataShopping({ ...dataShopping, totalProductos: dataShopping.totalProductos + producto.quantity, total: dataShopping.total + producto.precio}); //SETEA VALOR TOTAL PRODUCTOS
            console.log(setDataShopping)
        } else {
        setDataShopping({ ...dataShopping, totalProductos: producto.quantity, productos: [...dataShopping.productos, producto], total: producto.precio});
        }
    }


    const clearCart = () => {
        setDataShopping({...dataShopping, productos:[]});
    }


    const deleteProduct = (id) => {
        const productElimnated = dataShopping.productos.filter(product => product.id !== id);
        setDataShopping({...dataShopping, productos:productElimnated})
    }


    return (
        <ShoppingContext.Provider value={{ dataShopping, setDataShopping, clearCart, isInCart, deleteProduct, addProduct }}>
            {children}
        </ShoppingContext.Provider>
    )
}

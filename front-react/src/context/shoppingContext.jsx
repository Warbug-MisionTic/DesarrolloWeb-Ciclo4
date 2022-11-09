import React, { useState, useEffect } from 'react'

import { fetchSinToken } from '../helpers/fetch';

export const ShoppingContext = React.createContext();

export const ShoppingProvider = ({ children }) => {
    const [dataShopping, setDataShopping] = useState({
        fecha: new Date(),
        total: 0,
        totalProductos: 0,
        productos: []
    })
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const resp = await fetchSinToken('productos', 'GET');
            const body = await resp.json();
            if (body.ok) {
                setProductos(body.productos)
            }
        }
        fetchProducts()
    }, [])


    const addProduct = (producto) => {

        const productoGeneral = productos?.findIndex(item => item.id == producto.id)
        const newProducto = [...productos]
        newProducto[productoGeneral] = { ...newProducto[productoGeneral], stock: newProducto[productoGeneral].stock - producto.quantity }
        setProductos(newProducto);

        const productoFind = dataShopping.productos?.findIndex(item => item.id == producto.id)
        if (productoFind >= 0) {
            const newStateProducto = [...dataShopping.productos]
            newStateProducto[productoFind] = { ...newStateProducto[productoFind], quantity: newStateProducto[productoFind].quantity + producto.quantity }

            setDataShopping(prevState => ({
                ...prevState,
                total: prevState.total + producto.precio,
                totalProductos: prevState.totalProductos + producto.quantity,
                productos: newStateProducto
            }));

        } else {
            setDataShopping(prevState => ({
                ...prevState,
                total: prevState.total + producto.precio,
                totalProductos: prevState.totalProductos + producto.quantity,
                productos: [...prevState.productos, producto]
            }));
        }


    }


    const clearCart = () => {
        setDataShopping({ ...dataShopping, productos: [] });
    }


    const deleteProduct = (id) => {
        const productElimnated = dataShopping.productos.filter(product => product.id !== id);
        setDataShopping({ ...dataShopping, productos: productElimnated })
    }


    return (
        <ShoppingContext.Provider value={{ dataShopping, setDataShopping, clearCart, deleteProduct, addProduct, productos }}>
            {children}
        </ShoppingContext.Provider>
    )
}

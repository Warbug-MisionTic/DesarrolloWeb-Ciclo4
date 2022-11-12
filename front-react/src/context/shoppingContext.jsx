import React, { useState, useEffect } from 'react'

import { fetchSinToken } from '../helpers/fetch';

export const ShoppingContext = React.createContext();

export const ShoppingProvider = ({ children }) => {
    const [dataShopping, setDataShopping] = useState({
        fecha: new Date().toLocaleDateString(),
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

    const changeProducts = (data) => setProductos(data)

    const addProduct = (producto) => {

        const productoGeneral = productos?.findIndex(item => item.id === producto.id)
        const newProducto = [...productos]
        newProducto[productoGeneral] = { ...newProducto[productoGeneral], stock: newProducto[productoGeneral].stock - producto.quantity }
        setProductos(newProducto);

        const productoFind = dataShopping.productos?.findIndex(item => item.id === producto.id)
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


    const clearCart = async () => {
        setDataShopping({ ...dataShopping, productos: [], totalProductos: 0, total: 0 });
        const resp = await fetchSinToken('productos', 'GET');
        const body = await resp.json();
        if (body.ok) {
            setProductos(body.productos)
        }

    }


    const deleteProduct = (id) => {
        const productoSelected = dataShopping.productos.find(producto => producto.id === id)
        const productEliminated = dataShopping.productos.filter(product => product.id !== id);
        setDataShopping(prevState => ({
            ...prevState,
            total: prevState.total - productoSelected.precio,
            totalProductos: prevState.totalProductos - productoSelected.quantity,
            productos: productEliminated
        }));
        const productoIndividual = productos?.findIndex(item => item.id === productoSelected.id)
        const newProducto = [...productos]

        newProducto[productoIndividual] = { ...newProducto[productoIndividual], stock: newProducto[productoIndividual].stock + productoSelected.quantity }
        setProductos(newProducto);

    }


    return (
        <ShoppingContext.Provider value={{ dataShopping, setDataShopping, clearCart, deleteProduct, addProduct, productos, changeProducts }}>
            {children}
        </ShoppingContext.Provider>
    )
}

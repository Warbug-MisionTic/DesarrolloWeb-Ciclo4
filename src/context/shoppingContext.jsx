import React, { useState } from 'react'

export const ShoppingContext = React.createContext({});

export const ShoppingProvider = ({ children }) => {
    const [dataShopping, setDataShopping] = useState([])

      

    const addProduct = (producto) => {
        setDataShopping(dataShopping => [...dataShopping, producto ]);
        
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

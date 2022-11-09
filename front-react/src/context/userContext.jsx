import React, { useState, useEffect } from 'react'

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData)
        }
    }, [setUser])


    const toggleUser = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.token);
    };

    const cerrarSesion = () => {
        setUser()
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
    return (
        <UserContext.Provider value={{ user, toggleUser, cerrarSesion }}>
            {children}
        </UserContext.Provider>
    )
}

import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    let isLogged = !!token

    const storeTokenLS = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }

    const logOut = () => {
        setToken("") 
        return localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ storeTokenLS, logOut, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

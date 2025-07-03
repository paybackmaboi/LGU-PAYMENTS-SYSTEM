import React, { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            localStorage.clear();
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = { user, isAuthenticated, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

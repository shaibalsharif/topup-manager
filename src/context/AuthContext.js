import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (phoneNumber, password) => {
    return new Promise((resolve, reject) => {
      if (phoneNumber === '1234567890' && password === 'password') {
        const userData = { phoneNumber, loggedInAt: new Date().toLocaleString() };
        setUser(userData);
        Cookies.set('access_token', 'dummy_token', { expires: 1 });
        resolve(userData);
      } else {
        reject('Invalid credentials');
      }
    });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('access_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

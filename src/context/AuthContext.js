// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { mockAxiosPost } from '../util/data';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    const storedRole = Cookies.get('role');
    const storedToken = Cookies.get('authToken');
    if (storedUser && storedRole && storedToken) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
      setAuthToken(storedToken);
    }
  }, []);

  const login = async (phone, password) => {
    try {
      const response = await mockAxiosPost('/login', { phone, password });
      const { user, token } = response.data;
      
      setUser(user);
      setRole(user.role);
      setAuthToken(token);

      // Store in cookies
      Cookies.set('user', JSON.stringify(user), { expires: 7 });
      Cookies.set('role', user.role, { expires: 7 });
      Cookies.set('authToken', token, { expires: 7 });
      
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data || 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setAuthToken(null);
    Cookies.remove('user');
    Cookies.remove('role');
    Cookies.remove('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, role, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
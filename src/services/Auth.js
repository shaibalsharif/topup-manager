import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const users = {
  admin: { email: 'admin@admin.com', password: '123456', role: 'admin' },
  vendor: { email: 'vendor@vendor.com', password: '123456', role: 'vendor' },
  reseller: { email: 'reseller@reseller.com', password: '123456', role: 'reseller' },
};

export const login = (email, password) => {
  const user = Object.values(users).find(u => u.email === email && u.password === password);

  if (!user) {
    toast.error('Invalid email or password');
    return false;
  }

  Cookies.set('token', 'fakeToken', { expires: 1 / 24 });  // Expires in 1 hour
  Cookies.set('role', user.role, { expires: 1 / 24 });

  toast.success('Login successful');
  return true;
};

export const logout = () => {
  Cookies.remove('token');
  Cookies.remove('role');
  toast.success('Logged out successfully');
};

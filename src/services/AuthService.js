import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  const { token, user, role, id, expires_at } = response.data.data;

  // Guarda token y datos en localStorage
  localStorage.setItem('token', token);
  localStorage.setItem('user', user);
  localStorage.setItem('role', role);
  localStorage.setItem('userId', id);
  localStorage.setItem('expires_at', expires_at);

  return response.data;
};

export const logout = () => {
  localStorage.clear();
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

import React from 'react';
import Login from '../components/login';
import Home from '../components/home';
import { useUser } from '../contexts/UserContext';

export default function App() {
  const { user } = useUser();

  return !user ? <Login /> : <Home />;
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Chat from './Chat';
import Indprofile from './Indprofile';

const store = React.createContext();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login1" element={<Login />} />
        <Route path="/register1" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/indprofile/:id" element={<Indprofile />} />
      </Routes>
    </BrowserRouter>
  );
};

export { store };
export default App;
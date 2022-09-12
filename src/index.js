import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calendar } from "./components/Calendar";
import Header from "./components/Header";
import MenuLateral from "./components/MenuLateral";

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuLateral/>
    <Header/>
    <Calendar/>
  </React.StrictMode>
);

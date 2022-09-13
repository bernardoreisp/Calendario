import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calendar } from "./components/Agenda/Calendar";
import Header from "./components/Sidebar/MenuLateral";
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Calendar />
  </React.StrictMode>
);

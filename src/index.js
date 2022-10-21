import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/ContextProvider';
import { CartProvider } from './context/CartProvider';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </AppProvider>
);


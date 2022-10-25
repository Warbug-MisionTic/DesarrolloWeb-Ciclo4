import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingProvider } from './context/shoppingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShoppingProvider>
        <App />
    </ShoppingProvider>
);


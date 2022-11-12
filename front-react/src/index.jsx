import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import { ShoppingProvider } from './context/shoppingContext';
import { UserProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <ShoppingProvider>
            <App />
        </ShoppingProvider>
    </UserProvider>
);


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/style.css';

import App from './App.jsx';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

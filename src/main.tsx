import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { App } from './modules/dna-dashboard/dna-dashboard';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

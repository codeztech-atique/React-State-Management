import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importing Component
import App from './App';
import Sample from './Sample';
import Home from './components/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Sample />
    <App />
    <Home />
  </StrictMode>
);

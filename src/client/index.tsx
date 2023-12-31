import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './scss/app.scss';
import '@stripe/stripe-js'

document.body.classList.add('bg-dark');

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
import * as React from 'react';
import { render } from 'react-dom'
import App from './App';
import './scss/app.scss';

document.body.classList.add('bg-dark');

render(<App />, document.getElementById('root'));
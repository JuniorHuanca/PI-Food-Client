import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  { store }  from './redux/store/index'

axios.defaults.baseURL = `http://localhost:3001/`;
// axios.defaults.baseURL = `https://pi-food-server-production.up.railway.app/`;

ReactDOM.render(
  <Provider store= {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

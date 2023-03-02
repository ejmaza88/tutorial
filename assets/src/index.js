import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NameProvider} from "./contexts/NameContext";


import './index.css';
import './assets/css/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NameProvider>
      <App/>
    </NameProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// dayjs.unix("1674008388").format("DD/MM/YYYY HH:mm:ss")
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './Content';
import UpdateContact from './UpdateContact';
import * as serviceWorker from './serviceWorker';
import DefaultProvider from "./context/DefaultProvider";

ReactDOM.render(
  <React.StrictMode>
    <DefaultProvider>
      <App />
      <Content />
      <UpdateContact />
    </DefaultProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

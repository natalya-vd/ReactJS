import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

import { Routes } from './components/Routes';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes/> 
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

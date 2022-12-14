import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import textInputReducer from './features/TitleSlice.js'
import keyReducer from './features/KeySlice.js'
import axesReducer from './features/AxesSlice.js' 
import descriptionReducer from './features/DescriptionSlice.js'
import { BrowserRouter } from "react-router-dom";

export const store = configureStore({
  reducer: {
    textInput: textInputReducer, // titleReducer
    key: keyReducer,
    axes: axesReducer,
    description: descriptionReducer
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyThemeProvider } from "./context/ThemeProvider";


ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


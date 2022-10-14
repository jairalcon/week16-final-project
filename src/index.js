import React from 'react';
import ReactDOM from 'react-dom/client';
// https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app
import './fonts/Formula1/Formula1-Regular.otf';
import './fonts/Formula1/Formula1-Bold.otf';
import './fonts/Formula1/Formula1-Wide.otf';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

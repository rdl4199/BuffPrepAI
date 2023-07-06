import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Learning from './Learning/Learning'
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Router>
    <Routes>
      <Route path="/" exact element={<NavBar/>}>
      </Route>
      <Route path="/Learning" exact element={<Learning />}>
      </Route>
      <Route path="/App" exact element={<App />}>
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

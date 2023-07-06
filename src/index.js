import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Learning from './Learning/Learning'
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Router>
    <Switch>
      <Route path="/" exact>
        <NavBar />
      </Route>
      <Route path="/Learning" exact>
        <Learning />
      </Route>
      <Route path="/App">
        <App />
      </Route>
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

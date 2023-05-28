import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/global.scss';
import reportWebVitals from './reportWebVitals';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './widgets';
import Dashboard from './layouts/dashboard';
import Auth from './layouts/auth';
import App from './layouts/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function PrivateOutlet() {
  const isLoggedIn = localStorage.getItem('sm-magic');
  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

root.render(
  <React.StrictMode>
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<PrivateOutlet />}>
          <Route path="*" element={<Dashboard />} />
        </Route>
        <Route path="sign-in" element={<Auth />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

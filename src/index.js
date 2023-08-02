import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FirstPage from './pages/first_page';
import ResultPage from './pages/result.js';


const router = createBrowserRouter([
 {
  path: "/",
  element: <FirstPage />
 },
 {
  path: "/result",
  element: <ResultPage />
 },
 {
  path: "/about-us",
  element: <h1>About us Page</h1>
 }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

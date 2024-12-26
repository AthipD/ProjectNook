import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ react-dom/client
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // นำเข้า Routes และ Route


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // รวม Popper.js
import { Header } from './components/header';
import ServicesDetail from './components/SDetail';
import { Navigation } from './components/navigation';

// ใช้ createRoot แทน ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root')); // สร้าง root ใหม่
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap ด้วย BrowserRouter */}
      <Navigation />
      <Routes>
        {/* Default path renders the App component */}
        <Route path="/" element={<App />} />
        {/* Additional paths */}
        <Route path="/detailsSV" element={<ServicesDetail />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorker.unregister();

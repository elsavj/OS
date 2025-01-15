import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="OS" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Homepage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
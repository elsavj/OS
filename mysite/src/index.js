import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          {/* <Route index element={<Homepage />} /> */}
          <Route path="mysite" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Homepage />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
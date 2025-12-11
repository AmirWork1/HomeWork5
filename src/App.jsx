import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Header from './components/Header';
import { AppContext } from './context/AppContext';
import PageColor from './pages/PageColor';



function App() {
  
   const [bgColor,setBgColor] =useState("green")

  return (
<AppContext.Provider value={{ bgColor, setBgColor }}>
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pageColor" element={<PageColor />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App

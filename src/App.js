import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Login from "./Page/Login";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Registro from "./Page/Registro";
import Dimensiones from "./Page/dimensiones";
import Preguntas from "./Page/Preguntas";
import Aside from "./componentes/Aside";
import Home from "./Page/Home";
import Footer from './componentes/Footer';
import Estudiantes from './Page/Estudiantes';

export default function App() {
  const location = useLocation();


  const showHeader = location.pathname !== '/Login';

  return (
    <div className="App">
    <Aside/>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dimensiones" element={<Dimensiones />} />
      <Route path="/Preguntas" element={<Preguntas />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Estudiantes" element={<Estudiantes />} />
    </Routes>

    <Footer/>
  </div>
  );
}

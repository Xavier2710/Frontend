import React from "react";
import Container from "@mui/material/Container";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./estilos.css";

const Home = ({ sidebarOpen }) => {
  

  const totalStudents = 1000;
  const NoCreacionesLiterarias = 100;
  const preguntas = 50;
  const encuestados = 500;

  return (
    <Container
      component="main"
      maxWidth="xl"
      marginTop="70px"
      style={{
        marginLeft: sidebarOpen ? "250px" : "0",
        transition: "margin-left 0.3s ease",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="custom-card" style={{ marginBottom: "20px" }}>
          <div className="card-content">
            <h2 className="card-title">ESTUDIANTES</h2>
            <p className="card-text">{totalStudents}</p>
          </div>
        </div>

        <div className="custom-card" style={{ marginBottom: "20px" }}>
          <div className="card-content1">
            <h2 className="card-title">ENCUESTADOS</h2>
            <p className="card-text">{encuestados}</p>
          </div>
        </div>

        <div className="custom-card" style={{ marginBottom: "20px" }}>
          <div className="card-content2">
            <h2 className="card-title">CREACIONES LITERARIAS</h2>
            <p className="card-text">{NoCreacionesLiterarias}</p>
          </div>
        </div>

        <div className="custom-card" style={{ marginBottom: "20px" }}>
          <div className="card-content3">
            <h2 className="card-title">PREGUNTAS</h2>
            <p className="card-text">{preguntas}</p>
          </div>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        
      </div>
    </Container>
  );
};

export default Home;

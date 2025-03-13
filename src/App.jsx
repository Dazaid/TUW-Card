import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Box } from "@mui/material";
import Card3D from "./components/Card3D.jsx";
import './App.css';




// Detectar dispositivo antes de renderizar

const App = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Card3D />
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
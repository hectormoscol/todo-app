import './index.css'
import App from './App.tsx'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Punto de entrada principal de la app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registro del service worker para PWA (si existe, generado por Vite)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}
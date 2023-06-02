import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "./index.css";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyCojxcjh8xZytY7IikqlKflfOQYAH2qbzA",
  authDomain: "get-growing-plants.firebaseapp.com",
  projectId: "get-growing-plants",
  storageBucket: "get-growing-plants.appspot.com",
  messagingSenderId: "722404784038",
  appId: "1:722404784038:web:a4e767650284d0c7788167",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

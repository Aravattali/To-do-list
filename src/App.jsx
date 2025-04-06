import React from "react";
import { Routes, Route ,Navigate } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> 
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />

    </Routes>
  );
 }

export default App;

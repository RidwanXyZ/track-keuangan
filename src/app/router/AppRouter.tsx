import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Splash from "../../features/splash/Splash";
import Login from "../../features/auth/Login";
import Dashboard from "../../features/dashboard/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
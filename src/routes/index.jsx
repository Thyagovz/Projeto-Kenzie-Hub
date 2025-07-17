import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { ErrorPage } from "../Pages/ErrorPage";
import { useState } from "react";

export const RouterMain = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage setUser={setUser} />} />
      <Route
        path="/dashboard"
        element={<DashboardPage user={user} logout={logout} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

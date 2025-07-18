import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { RegisterPage } from "../../Pages/RegisterPage";
import { DashboardPage } from "../../Pages/DashboardPage";
import { ErrorPage } from "../../Pages/ErrorPage";
import { PrivateRoutes } from "../PrivateRoutes/Index";
import { PublicRoutes } from "../PublickRoutes/Index";

export const RouterMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import {LoginPage} from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { ErrorPage } from "../Pages/ErrorPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage /> }/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage /> }/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  );
};

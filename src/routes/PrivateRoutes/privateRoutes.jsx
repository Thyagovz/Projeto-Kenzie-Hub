import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext/userContext";

export const PrivateRoutes = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" />;
};

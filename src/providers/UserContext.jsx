import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userRegister = async (payload) => {
    const { confirmPassword, ...rest } = payload;
    try {
      const { data } = await api.post("/users", rest);
      setUser(data.user);

      localStorage.setItem("@kenziehub:token", data.token);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const userLogin = async (payload) => {
    try {
      const { data } = await api.post("/sessions", payload);
      setUser(data.user);

      localStorage.setItem("@kenziehub:token", data.token);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha não correspondem.");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@kenziehub:token");
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

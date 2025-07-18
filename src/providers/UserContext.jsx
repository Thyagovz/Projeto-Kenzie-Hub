import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const pathname = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@kenziehub:token");

    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      getUser();
    }
    setUser(null);
  }, []);

  const userRegister = async (payload) => {
    const { confirmPassword, ...rest } = payload;
    try {
      const { data } = await api.post("/users", rest);
      setUser(data.user);

      localStorage.setItem("@kenziehub:token", data.token);
      localStorage.setItem("@kenziehub:user_id", data.user.id);
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
      localStorage.setItem("@kenziehub:userid", data.user.id);
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
    <UserContext.Provider
      value={{ user, userRegister, userLogin, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

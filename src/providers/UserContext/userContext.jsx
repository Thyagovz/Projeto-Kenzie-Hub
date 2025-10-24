/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingPage, setLoadingPage] = useState(true);
  const [techList, setTechList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");

    const loadUser = async () => {
      if (!token) {
        setLoadingPage(false);
        return;
      }

      try {
        setLoadingPage(true);
        const { data } = await api.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data);
        setTechList(data.techs || []);
      } catch {
        localStorage.removeItem("@kenzieHub:token");
        setUser(null);
        setTechList([]);
        navigate("/");
      } finally {
        setLoadingPage(false);
      }
    };

    loadUser();
  }, [navigate]);

  const userRegisterRequest = async (formData, setLoading) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error) {
      if (error.response?.data?.message === "Email already exists") {
        toast.error("Este email já foi cadastrado");
      } else {
        toast.error("Erro ao cadastrar usuário");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLoginRequest = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);

      setUser(data.user);
      localStorage.setItem("@kenzieHub:token", data.token);
      setTechList(data.user.techs || []);
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data?.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email ou senha não correspondem");
      } else {
        toast.error("Erro ao realizar login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutButtonClick = () => {
    localStorage.removeItem("@kenzieHub:token");
    setUser(null);
    setTechList([]);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loadingPage,
        userRegisterRequest,
        userLoginRequest,
        handleLogoutButtonClick,
        techList,
        setTechList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export const LoginForm = ({ setUser }) => {
  const onSubmit = (formData) => {
    console.log(formData);
    login(formData);
  };
  const navigate = useNavigate();
  const login = async (payload) => {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.titleText}>
        <h2 className="title 1 center">Login</h2>
        <div></div>
      </div>
      <Input
        label={"Email"}
        type="email"
        placeholder="Digite aqui seu email"
        error={errors.email}
        {...register("email")}
      />
      <Input
        label={"Senha"}
        type="password"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />

      <button type="submit" className="buttonPrimary">
        Entrar
      </button>
    </form>
  );
};

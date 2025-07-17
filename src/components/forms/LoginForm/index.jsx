import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Link } from "react-router-dom";
import { InputPassword } from "../InputPassword";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const onSubmit = (formData) => {
    console.log(formData);
    userLogin(formData);
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
      <InputPassword
        label={"Senha"}
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />

      <button type="submit" className="buttonPrimary">
        Entrar
      </button>
      <Link to="/register" className="headline bold center gray">
        Ainda não possui uma conta?
      </Link>
      <Link to="/register" className="buttonPrimary disabled">
        Cadastre-se
      </Link>
    </form>
  );
};

import { Link } from "react-router-dom";
import { Form } from "../../components/forms/Form/form";
import { Input } from "../../components/forms/Input/input";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/mainLogo.svg";
import styles from "./style.module.scss";
import { InputPassword } from "../../components/forms/InputPassword/inputPassword";
import { useState } from "react";
import { useUserContext } from "../../providers/UserContext/userContext.jsx";

export const LoginPage = () => {
  const { userLoginRequest } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const submit = (formData) => {
    userLoginRequest(formData, setLoading);
  };

  return (
    <>
      <main className="pageBox">
        <div className="container small">
          <div className={styles.logo}>
            <img src={logo} alt="kenzie hub logo" />
          </div>
          <div>
            <Form
              title="Login"
              text=""
              handleSubmit={handleSubmit}
              submit={submit}
            >
              <Input
                label="Email"
                type="email"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
                disabled={loading}
                error={errors.email}
              />
              <InputPassword
                label="Senha"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
                disabled={loading}
                error={errors.password}
              />
              <button
                type="submit"
                className="buttonPrimary"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
              <Link to="/register" className="headline bold center gray">
                Ainda não possui uma conta?
              </Link>
              <Link to="/register" className="buttonPrimary disabled">
                Cadastre-se
              </Link>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
};

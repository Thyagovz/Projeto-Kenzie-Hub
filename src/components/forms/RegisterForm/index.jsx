import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { registerFormSchema } from "./registerForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../Select";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export const RegisterForm = ({ setUser }) => {
  const onSubmit = (formData) => {
    createUser(formData);
    console.log(formData);
  };
  const navigate = useNavigate();

  const createUser = async (payload) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.titleText}>
        <h2 className="title 1 center">Crie sua conta</h2>
        <p className="headline gray center">Rápido e grátis, vamos nessa!</p>
        <div></div>
      </div>
      <Input
        label={"Nome"}
        type="text"
        placeholder="Digite aqui seu nome"
        error={errors.name}
        {...register("name")}
      />
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
      <Input
        label={"Confirmar Senha"}
        type="password"
        placeholder="Confirme sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />
      <Input
        label={"Bio"}
        type="text"
        placeholder="Fale sobre você"
        error={errors.bio}
        {...register("bio")}
      />
      <Input
        label={"Contato"}
        type="text"
        placeholder="Opção de contato"
        error={errors.contact}
        {...register("contact")}
      />
      <Select
        label="Selecionar módulo"
        register={register("course_module")}
        error={errors.course_module}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </Select>

      <button type="submit" className="buttonPrimary negative">
        Cadastrar
      </button>
    </form>
  );
};

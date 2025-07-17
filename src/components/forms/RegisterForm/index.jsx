import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { registerFormSchema } from "./registerForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../Select";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { InputPassword } from "../InputPassword";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const onSubmit = (formData) => {
    userRegister(formData);
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
      <InputPassword
        label={"Senha"}
        placeholder="Digite aqui sua senha"
        error={errors.password}
        {...register("password")}
      />
      <InputPassword
        label={"Confirmar Senha"}
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

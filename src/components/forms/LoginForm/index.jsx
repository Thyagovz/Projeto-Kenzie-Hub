import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const onSubmit = (e) => {
    console.log(e);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit">Cadastre-se</button>
    </form>
  );
};

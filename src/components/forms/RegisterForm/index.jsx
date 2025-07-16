import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const RegisterForm = () => {
  const onSubmit = (e) => {
    console.log(e);
  };

  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"Nome"}
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <Input
        label={"Email"}
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <Input
        label={"Senha"}
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <Input
        label={"Confirmar Senha"}
        type="password"
        placeholder="Confirme sua senha"
        {...register("confirme")}
      />
      <Input
        label={"Bio"}
        type=""
        placeholder="Fale sobre você"
        {...register("sobre")}
      />
      <Input
        label={"Contato"}
        type=""
        placeholder="Opção de contato"
        {...register("contato")}
      />
      <select name="Selecionar módulo" id=""></select>

      <button type="submit">Cadastrar</button>

      {/* <input type="text" placeholder="Digite aqui seu nome" />
      <input type="email" placeholder="Digite aqui seu email" />
      <input type="password" placeholder="Digite aqui uma senha" />
      <input type="" placeholder="" />
      <input type="" placeholder="" />
      <input type="" placeholder="" />
      <input type="" placeholder="" /> */}
    </form>
  );
};

import { RegisterForm } from "../../components/forms/RegisterForm";

export const RegisterPage = ({ setUser }) => {
  return (
    <main>
      <RegisterForm setUser={setUser} />
    </main>
  );
};

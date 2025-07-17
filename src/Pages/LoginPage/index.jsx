import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = ({ setUser }) => {
  return (
    <main>
      <LoginForm setUser={setUser} />
    </main>
  );
};

import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";

export const LoginPage = ({ setUser }) => {
  return (
    <main className="pageBox">
      <div className="container small">
        <div className={styles.logo}>
          <img src={logo} alt="kenzie hub logo" />
        </div>
      </div>
      <LoginForm setUser={setUser} />
    </main>
  );
};

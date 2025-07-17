import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";

export const RegisterPage = ({ setUser }) => {
  return (
    <main className="pageBox">
      <div className="container small">
        <div className={styles.registerFormTop}>
          <img src={logo} alt="Kenzie Hub Logo" />
          <Link to="/" className="buttonMedium">
            Voltar
          </Link>
        </div>
        <RegisterForm setUser={setUser} />
      </div>
    </main>
  );
};

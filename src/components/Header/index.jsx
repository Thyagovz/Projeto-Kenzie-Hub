import { useContext } from "react";
import logo from "../../assets/mainLogo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <header className={styles.headerBox}>
      <div className="container">
        <div className={styles.headerElements}>
          <img className={styles.logo} src={logo} alt="Logo Kenzie Hub" />
          <button className="buttonMedium" onClick={userLogout}>
            Sair
          </button>
        </div>
        <div>
          <p>{user?.name}</p>
          <p>{user?.course_module}</p>
        </div>
      </div>
    </header>
  );
};

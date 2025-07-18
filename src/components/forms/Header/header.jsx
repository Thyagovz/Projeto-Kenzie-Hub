import logo from "../../../assets/mainLogo.svg";
import styles from "./style.module.scss";
import { useUserContext } from "../../../providers/UserContext/userContext.jsx";

export const Header = () => {
  const { handleLogoutButtonClick } = useUserContext();

  return (
    <header className={styles.headerBox}>
      <div className="container">
        <div className={styles.headerElements}>
          <img className={styles.logo} src={logo} alt="logo kenzie hub" />
          <button className="buttonMedium " onClick={handleLogoutButtonClick}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

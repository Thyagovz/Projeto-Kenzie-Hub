import loadingIcon from "../../assets/loadingIcon.svg";
import logo from "../../assets/mainLogo.svg";
import styles from "./style.module.scss";

export const Loading = () => {
  return (
    <div className={styles.flexBox}>
      <img className={styles.loading} src={loadingIcon} alt="loading icon" />
      <img src={logo} alt="kenziehub logo" />
      <p className="paragraph gray">Carregando...</p>
    </div>
  );
};

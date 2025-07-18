import { Link } from "react-router-dom";
import gif from "../../assets/sad.gif";
import styles from "./style.module.scss";
import { useUserContext } from "../../providers/UserContext/userContext";

export const ErrorPage = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="container small">
        <div className={`${styles.box}`}>
          <img src={gif} alt="" />
          {user ? <p>{user.name},</p> : null}
          <h2 className="title2">Página não encontrada 💔</h2>
          {user ? (
            <Link to="/dashboard" className="paragraph gray">
              Ir para dashboard 🏃🏻‍♂️
            </Link>
          ) : (
            <Link
              to="/"
              className="paragraph gray"
            >
              Ir para página inicial 🏃🏻‍♂️
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

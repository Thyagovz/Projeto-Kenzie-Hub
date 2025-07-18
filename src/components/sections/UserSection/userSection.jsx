import { useUserContext } from "../../../providers/UserContext/userContext";
import styles from "./style.module.scss";

export const UserSection = () => {
  const { user } = useUserContext();

  return (
    <section className={styles.userSection}>
      <div className="container">
        <div className={styles.userSectionElements}>
          <span className="text1">Olá, {user?.name}</span>
          <span className="headline gray">{user?.course_module}</span>
        </div>
      </div>
    </section>
  );
};

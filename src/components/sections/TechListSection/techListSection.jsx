import { TechList } from "../../TechList/techList";
import { BiPlus } from "react-icons/bi";
import styles from "./style.module.scss";
import { useTechContext } from "../../../providers/TechContext/techContext";
import { useUserContext } from "../../../providers/UserContext/userContext";

export const TechListSection = () => {
  const { setCreateTech } = useTechContext();
  const { techList } = useUserContext();

  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <h3 className="title2">Tecnologias </h3>
          <button
            className="buttonMedium thin"
            aria-label="add new tech"
            onClick={() => setCreateTech(true)}
          >
            <BiPlus size={18} />
          </button>
        </div>
        {techList.length > 0 ? (
          <TechList />
        ) : (
          <p className={styles.noTechMessage}>Nenhuma tech cadastrada.</p>
        )}
      </div>
    </section>
  );
};

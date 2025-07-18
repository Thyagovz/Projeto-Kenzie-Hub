import { useUserContext } from "../../providers/UserContext/userContext";
import { TechCard } from "./TechCard/techCard";
import styles from "./style.module.scss";

export const TechList = () => {
  const { techList } = useUserContext();

  return (
    <ul className={styles.list}>
      {techList.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
};

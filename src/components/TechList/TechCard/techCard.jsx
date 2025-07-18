import { FiEdit2, FiTrash2 } from "react-icons/fi";
import styles from "./style.module.scss";
import { useTechContext } from "../../../providers/TechContext/techContext";

export const TechCard = ({ tech }) => {
  const {
    setEditingTech,
    deleteTaskRequest,
    currentId,
    setCurrentId,
  } = useTechContext();

  const handleEditButtonClick = (tech) => {
    setCurrentId(tech.id);
    setEditingTech(tech);
  };

  return (
    <li className={currentId === tech.id ? styles.activeTech : styles.listItem}>
      <div className={styles.listItemContent}>
        <p className="title2">{tech.title}</p>
        <div className={styles.info}>
          <span className="headline gray">{tech.status}</span>
          <div className={styles.buttons}>
            <button
              aria-label="edit tech"
              onClick={() => handleEditButtonClick(tech)}
            >
              <FiEdit2 size={15} />
            </button>
            <button
              aria-label="delete tech"
              onClick={() => deleteTaskRequest(tech.id)}
            >
              <FiTrash2 size={15} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

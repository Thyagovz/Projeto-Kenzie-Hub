import { useTechContext } from "../../../providers/TechContext/techContext";
import { Input } from "../../forms/Input/input";
import { Select } from "../../forms/Select/select";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, updateTechRequest, setCurrentId } =
    useTechContext();

  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setEditingTech(null);
      }
    };
    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setEditingTech(null);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const submit = (formData) => {
    updateTechRequest(formData);
    setCurrentId(null);
  };

  const handleCloseModalButtonClick = () => {
    setEditingTech(null);
    setCurrentId(null);
  };

  return (
    <div ref={modalRef} className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="title2">Tecnologia Detalhes</h2>
          <button aria-label="close" onClick={handleCloseModalButtonClick}>
            <AiOutlineClose />
          </button>
        </div>
        <form className={styles.modalContent} onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            disabled={true}
            {...register("title")}
          />
          <Select label="Selecionar status" register={register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="buttonPrimary negative" type="submit">
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};

import { useTechContext } from "../../../providers/TechContext/techContext";
import { Input } from "../../forms/Input/input";
import { Select } from "../../forms/Select/select";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";

export const CreateTechModal = () => {
  const { setCreateTech, createTechRequest } = useTechContext();

  const { register, handleSubmit } = useForm();

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setCreateTech(false);
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
        setCreateTech(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const submit = (formData) => {
    createTechRequest(formData);
  };

  return (
    <div ref={modalRef} className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className="title2">Cadastrar tecnologia</h2>
          <button aria-label="close" onClick={() => setCreateTech(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <form className={styles.modalContent} onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            required={true}
            type="text"
            {...register("title")}
          />
          <Select label="Selecionar status" register={register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="buttonPrimary " type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};

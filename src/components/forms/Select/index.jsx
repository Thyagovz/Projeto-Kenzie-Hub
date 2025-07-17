import styles from "./style.module.scss";

export const Select = ({ label, id, children, register, error }) => {
  return (
    <div className={styles.selectField}>
      <label className="headline" htmlFor={id}>
        {label}
      </label>
      <select className="select" id={id} {...register}>
        {children}
      </select>
      {error ? <p className="headline red">{error.message}</p> : null}
    </div>
  );
};

import styles from "./style.module.scss";

export const Form = ({ children, title, text, handleSubmit, submit }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.titleText}>
        <h2 className="title1 center">{title}</h2>
        {text !== "" ? <p className="headline gray center">{text}</p> : null}
      </div>
      <div className={styles.formFields}>{children}</div>
    </form>
  );
};

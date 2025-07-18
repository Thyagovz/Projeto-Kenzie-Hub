import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div className={styles.inputContainer}>
      <label className="headline" htmlFor={id}>
        {label}
      </label>
      <input className="input paragraph" ref={ref} {...rest} />
      {error ? <p className="headline red">{error.message}</p> : null}
    </div>
  );
});

import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className= {styles.inputContainer}>
      <label className="headline">{label} :</label>
      <input className="input paragraph" ref={ref} {...rest} />
      {error ? <p className="headline red">{error.message}</p> : null}
    </div>
  );
});

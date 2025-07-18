import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(
  ({ label, id, error, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
      <div className={styles.inputContainer}>
        <label className="headline" htmlFor={id}>
          {label}
        </label>
        <div className={styles.inputPassword}>
          <input
            type={isHidden ? "password" : "text"}
            className="input paragraph"
            ref={ref}
            {...rest}
          />
          <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
          </button>
        </div>
        {error ? <p className="headline red">{error.message}</p> : null}
      </div>
    );
  }
);

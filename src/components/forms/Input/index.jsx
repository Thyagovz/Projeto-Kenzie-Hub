import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div>
      <label>{label} :</label>
      <input ref={ref} {...rest} />
    </div>
  );
});

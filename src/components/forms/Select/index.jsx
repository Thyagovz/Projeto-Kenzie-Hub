export const Select = ({ label, id, children, register, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register}>
        {children}
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
};

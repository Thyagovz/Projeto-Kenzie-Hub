import { Header } from "../../components/forms/Header/header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

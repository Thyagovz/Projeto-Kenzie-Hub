import { Header } from "../../components/forms/Header";

export const DefaultTemplate = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
    </>
  );
};

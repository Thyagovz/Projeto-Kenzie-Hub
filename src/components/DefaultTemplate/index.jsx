import { Header } from "../Header";

export const DefaultTemplate = ({ user, logout, children }) => {
  return (
    <>
      <Header user={user} logout={logout} />
      {children}
    </>
  );
};

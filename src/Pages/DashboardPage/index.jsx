import { DefaultTemplate } from "../../components/DefaultTemplate";

export const DashboardPage = ({ user, logout }) => {
  return (
    <DefaultTemplate user={user} logout={logout}>
      <main></main>
    </DefaultTemplate>
  );
};

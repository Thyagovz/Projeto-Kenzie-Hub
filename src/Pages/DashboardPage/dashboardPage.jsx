import { CreateTechModal } from "../../components/modal/CreateTechModal/createTechModal.jsx";
import { EditTechModal } from "../../components/modal/EditTechModal/editTechModal.jsx";
import { TechListSection } from "../../components/sections/TechListSection/techListSection.jsx";
import { UserSection } from "../../components/sections/UserSection/userSection.jsx";
import { useTechContext } from "../../providers/TechContext/techContext.jsx";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";

export const DashboardPage = () => {
  const { createTech, editingTech } = useTechContext();

  return (
    <>
      <DefaultTemplate>
        <UserSection />
        <TechListSection />
        {createTech ? <CreateTechModal /> : null}
        {editingTech ? <EditTechModal /> : null}
      </DefaultTemplate>
    </>
  );
};

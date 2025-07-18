import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import Loading from "./assets/loadingIcon.svg";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      <ToastContainer theme="dark" />
      {loading ? <img src={Loading} alt="Carregando..." /> : <RouterMain />}
    </>
  );
}

export default App;

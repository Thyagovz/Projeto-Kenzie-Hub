import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterMain />
    </>
  );
}

export default App;

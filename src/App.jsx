import "react-toastify/dist/ReactToastify.css";
import { RouterMain } from "./routes/RouterMain/routerMain.jsx";
import "./styles/index.scss";
import { Loading } from "./components/Loading/loading";
import { useUserContext } from "./providers/UserContext/userContext.jsx";

const App = () => {
  const { loadingPage } = useUserContext();

  return <>{loadingPage ? <Loading /> : <RouterMain />}</>;
};

export default App;

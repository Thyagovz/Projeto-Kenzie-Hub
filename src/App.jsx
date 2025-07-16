import { DefaultTemplate } from "./components/DefaultTemplate";
import { RouterMain} from "./routes"
import "./styles/index.scss";

function App() {
  return (
    <>
      <DefaultTemplate>
        <RouterMain />
      </DefaultTemplate>
    </>
  );
}

export default App;

import "./App.css";

import Image from "./assets/bgd.jpg";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import MyContext from "./context";
import useLocalStorage from "./custom/useLocalStorage";
function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ tasks, setTasks }}>
        <div
          style={{
            background: `url(${Image}) no-repeat center fixed`,
            height: "100vh",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <Navigation />
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

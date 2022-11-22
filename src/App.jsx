import reactLogo from "./assets/react.svg";
import { images } from "./constants";
import { AiFillBell } from "react-icons/ai";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;

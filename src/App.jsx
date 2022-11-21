import reactLogo from "./assets/react.svg";
import { images } from "./constants";
import { AiFillBell } from "react-icons/ai";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

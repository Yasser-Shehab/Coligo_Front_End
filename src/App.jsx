import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/Auth/Auth";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return <div className="App">{isAuth ? <Dashboard /> : <Auth />}</div>;
}

export default App;

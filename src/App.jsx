import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/Auth/Auth";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Auth />} />
    </Routes>
  );
}

export default App;

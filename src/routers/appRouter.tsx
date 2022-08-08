import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Insues from "../pages/Insues/insues";
import LoginPage from "../pages/Login/login_page";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/incidentes" element={<Insues />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

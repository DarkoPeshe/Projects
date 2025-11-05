import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => (
  <div className="page-container">
    <Navbar />
    <Outlet />
  </div>
);

export default App;

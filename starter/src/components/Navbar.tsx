import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbarImage">
      <h1 className="navbarTitle">MUSIC DB</h1>
    </Link>
  </nav>
);

export default Navbar;

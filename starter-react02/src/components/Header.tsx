import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">
            <img src="/img/logo.png" alt="bike-logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Bikes</a>
          </li>
          <li>
            <a href="#">Gear</a>
          </li>
          <li>
            <a href="#">Parts</a>
          </li>
          <li>
            <a href="#">Tires</a>
          </li>
          <li>
            <a href="#">Service-info</a>
          </li>
          <li>
            <a href="#">Catalogues</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="icons">
          <i className="fa-solid fa-magnifying-glass magnyfing-glass"></i>
          <i className="fa-solid fa-bag-shopping shopping-bag"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

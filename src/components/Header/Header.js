import logo from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import potrait from "../../assets/Images/Mohan-muruge.jpg";

import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <Link to={`/`} className="title-link">
          <img className="header__logo" src={logo} alt="random im" />
        </Link>
      </div>
      <div className="header__search">
        <input
          className="header__input"
          type="text"
          placeholder="Search"
        />
        <Link to={`/Upload`} className="header__button-container">
          <button className="header__button--hidden">UPLOAD</button>
        </Link>
        <img className="header__image" src={potrait} alt="random im" />
      </div>
      <div className="header__button-div">
      <Link to={`/Upload`}className="header__button"> <button className="header__button-link">UPLOAD</button>     </Link>
      </div>
    </header>
  );
}
export default Header;

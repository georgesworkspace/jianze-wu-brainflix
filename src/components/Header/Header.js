import logo from "../../assets/Logo/BrainFlix-logo.svg";

import potrait from "../../assets/Images/Mohan-muruge.jpg"

import "./Header.scss";
function navigation() {
  return (
    <header className="header">
      <div className="header__title">
        <img className="header__logo" src={logo} alt="random im" />
      </div>
      <div className="header__search">
        <input
          className="header__input"
          type="text"
          placeholder="Search"
        ></input>
        <button className="header__button--hidden">UPLOAD</button>
        <img className="header__image" src={potrait} alt="random im" />
      </div>
      <div className="header__button-div">
        <button className="header__button">UPLOAD</button>
      </div>
    </header>
  );
}
export default navigation;

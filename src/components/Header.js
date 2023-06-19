import React from "react";
import logoMesto from "../images/logo-image.svg";

function Header() {
  return (
    <header className="header">
      <img src={logoMesto} alt="логотип" className="header__logo" />
    </header>
  );
}

export default Header;

import React from "react";
import "../../components/sass/header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo de l'entreprise Kasa" />
      </div>
      <nav>
        <ul className="nav__list">
          <li className="list__item">
            <NavLink to="/">Acceuil</NavLink>
          </li>
          <li className="list__item">
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

import React from "react";
import Logo from "../../assets/images/logo-kasa-white.png";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.logo}>
        <img src={Logo} alt="Logo de l'entreprise en blanc" />
      </div>
      <p className={Styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;

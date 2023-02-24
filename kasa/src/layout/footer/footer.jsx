import React from "react";
import Logo from "../../assets/images/logo-kasa-white.png";
import "../../components/sass/layout/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="Logo de l'entreprise en blanc" />
      </div>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;

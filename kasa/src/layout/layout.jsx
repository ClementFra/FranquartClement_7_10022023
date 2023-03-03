import React from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import { Outlet } from "react-router-dom";

/*********************************************************************************************************************************/
/*Layout posséant les composants Header et Footer ainsi que les enfants du router( Homepage,HouseDescriptions, About et NotFound)*/
/******************************************************************************************************************************* */

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

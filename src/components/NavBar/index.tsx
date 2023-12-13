import React, { ReactNode } from "react";

import "./index.css";

interface NavBarComponentProps {
  children?: ReactNode;
}

const NavBar: React.FC<NavBarComponentProps> = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <h2>Navbar</h2>
          {children}
        </div>
      </div>
    </>
  );
};
export default NavBar;

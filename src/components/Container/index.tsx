import React, { ReactNode } from "react";

import "./index.css";

const Container: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="content">{children}</div>
    </>
  );
};
export default Container;

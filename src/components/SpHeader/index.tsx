import React, { useState } from "react";
import "./index.css";
// import SpCarDialog from "../SpCarDialog/index";

const SpHeader: React.FC = () => {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const open = (event: React.MouseEvent) => {
    // setIsDialogOpen(!isDialogOpen);
    console.log((event.target as HTMLElement).getBoundingClientRect());
  };
  return (
    <>
      <div className="shopping-header">
        <h3>ly</h3>
        <button className="btn" onClick={open}>
          guc
        </button>
        {/* <SpCarDialog isOpen={isDialogOpen}>
          <button>23ppo</button>
        </SpCarDialog> */}
      </div>
    </>
  );
};
export default SpHeader;

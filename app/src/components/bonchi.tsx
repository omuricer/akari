import React, { useState, useEffect } from "react";

interface IBonchiProps {}
const Bonchi: React.FC<IBonchiProps> = (props) => {
  return (
    <div className="mdc-layout-grid no-margin bonchi">
      <div className="mdc-layout-grid__inner content"></div>
    </div>
  );
};
export default Bonchi;

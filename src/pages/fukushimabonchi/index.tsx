import HCF from "components/layouts/hcf";

import React, { useState, useEffect } from "react";
import FukushimaBonchi from "components/fukushimaBonchi";

interface Props {}
const Page: React.FC<Props> = (props) => {
  return (
    <HCF>
      <FukushimaBonchi />
    </HCF>
  );
};
export default Page;

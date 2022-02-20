import React from "react";

const Remaining = ({ remainingCalc }) => {
  return <div className="remaining">Remaining: £{remainingCalc()}</div>;
};

export default Remaining;
